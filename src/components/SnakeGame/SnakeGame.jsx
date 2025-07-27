import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './SnakeGame.scss';

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const INITIAL_DIRECTION = { x: 0, y: 1 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem('snakeHighScore') || 0);

  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prevScore => {
          const newScore = prevScore + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snakeHighScore', newScore);
          }
          return newScore;
        });
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood, highScore]);

  const handleKeyPress = useCallback((e) => {
    if (!gameStarted && e.key === ' ') {
      setGameStarted(true);
      return;
    }

    if (gameOver && e.key === ' ') {
      resetGame();
      return;
    }

    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  }, [direction, gameOver, gameStarted]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  const renderBoard = () => {
    const board = [];
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        let cellClass = 'cell';
        
        if (snake.some(segment => segment.x === x && segment.y === y)) {
          cellClass += ' snake';
          if (snake[0].x === x && snake[0].y === y) {
            cellClass += ' head';
          }
        } else if (food.x === x && food.y === y) {
          cellClass += ' food';
        }

        board.push(
          <div key={`${x}-${y}`} className={cellClass}></div>
        );
      }
    }
    return board;
  };

  return (
    <div className="snake-game-container">
      <div className="back-button">
        <Link to="/" className="home-link">← Back to Home</Link>
      </div>
      <div className="game-header">
        <h1>🐍 Snake Game</h1>
        <div className="score-board">
          <div className="score">Score: {score}</div>
          <div className="high-score">High Score: {highScore}</div>
        </div>
      </div>
      
      <div className="game-board">
        {renderBoard()}
      </div>

      <div className="game-controls">
        {!gameStarted && !gameOver && (
          <div className="start-message">
            <p>Press SPACE to start the game!</p>
            <p>Use arrow keys to control the snake</p>
          </div>
        )}
        
        {gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Final Score: {score}</p>
            {score === highScore && score > 0 && <p className="new-record">🎉 New High Score! 🎉</p>}
            <p>Press SPACE to play again</p>
          </div>
        )}

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Use arrow keys to move the snake</li>
            <li>Eat the red food to grow and score points</li>
            <li>Don't hit the walls or yourself!</li>
            <li>Each food gives you 10 points</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;