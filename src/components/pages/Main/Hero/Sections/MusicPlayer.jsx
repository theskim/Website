"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./MusicPlayer.scss";

const postMessage = (iframe, command, args = []) => {
  if (!iframe?.contentWindow) return;
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: command, args }),
    "*",
  );
};

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

const MusicPlayer = ({
  youtubeId,
  autoPlay = true,
  initialVolume = 60,
  className = "",
}) => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay));
  const [isMuted, setIsMuted] = useState(false); // start unmuted
  const [volume, setVolume] = useState(clamp(initialVolume, 0, 100));

  const volIcon = useMemo(() => {
    if (isMuted || volume === 0) return "ic:round-volume-off";
    if (volume < 34) return "ic:round-volume-mute";
    if (volume < 67) return "ic:round-volume-down";
    return "ic:round-volume-up";
  }, [isMuted, volume]);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    postMessage(el, "setVolume", [volume]);
  }, [volume]);

  const handleIframeLoad = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (autoPlay) {
      // try to start with sound; browsers may still block until a user gesture
      postMessage(el, "playVideo");
      postMessage(el, "unMute");
    }
    setIsPlaying(Boolean(autoPlay));
    setIsMuted(false);
  };

  const togglePlay = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (isPlaying) {
      postMessage(el, "pauseVideo");
      setIsPlaying(false);
    } else {
      postMessage(el, "playVideo");
      setIsPlaying(true);
      if (isMuted) {
        postMessage(el, "unMute");
        setIsMuted(false);
      }
    }
  };

  const toggleMute = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (isMuted) {
      postMessage(el, "unMute");
      setIsMuted(false);
    } else {
      postMessage(el, "mute");
      setIsMuted(true);
    }
  };

  const onVolume = (v) => {
    const next = clamp(Number(v), 0, 100);
    setVolume(next);
    if (next === 0 && !isMuted) {
      postMessage(iframeRef.current, "mute");
      setIsMuted(true);
    } else if (next > 0 && isMuted) {
      postMessage(iframeRef.current, "unMute");
      setIsMuted(false);
    }
  };

  const origin =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.origin)
      : "";
  const src = `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=${
    autoPlay ? 1 : 0
  }&mute=0&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&disablekb=1&fs=0&playsinline=1&iv_load_policy=3&rel=0&origin=${origin}`;

  return (
    <div className={`mp ${className}`}>
      <iframe
        ref={iframeRef}
        title="YouTube music"
        src={src}
        width="1"
        height="1"
        style={{ position: "absolute", left: "-9999px" }}
        allow="autoplay; encrypted-media"
        onLoad={handleIframeLoad}
        aria-hidden="true"
      />

      <button
        type="button"
        className="mp__btn"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <Icon
          className="mp__ico"
          icon={isPlaying ? "ic:round-pause" : "ic:round-play-arrow"}
        />
      </button>

      <button
        type="button"
        className="mp__btn"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        <Icon className="mp__ico" icon={volIcon} />
      </button>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={(e) => onVolume(e.target.value)}
        aria-label="Volume"
        className="mp__range"
        style={{ "--val": `${isMuted ? 0 : volume}%` }}
      />
    </div>
  );
};

MusicPlayer.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  initialVolume: PropTypes.number,
  className: PropTypes.string,
};

export default MusicPlayer;
