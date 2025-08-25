"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import projectsData from "../../../data/projects.json";
import "./Modal.scss";

const Modal = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { slug } = params;
  const [screenWidth, setScreenWidth] = useState(0);
  const [error, setError] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const canvasRef = useRef(null);

  // Update screenWidth on window resize
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    } catch (err) {
      setError(err.message);
    }
  }, []);

  // Modal background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Modal-specific particles (fewer and smaller)
    const particles = [];
    const particleCount = 30;

    class ModalParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new ModalParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw subtle connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    try {
      setIsClosing(true);
      // Add delay to allow fade-out animation to complete
      setTimeout(() => {
        router.back();
      }, 300);
    } catch (err) {
      setError(err.message);
      setIsClosing(false);
    }
  };

  // Add error handling for project lookup
  if (!slug) {
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h1>No project slug provided</h1>
      </div>
    );
  }

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Project not found</h1>
        <p>Slug: {slug}</p>
        <p>Available slugs: {projectsData.map((p) => p.slug).join(", ")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Error loading project</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  // Wrap the entire render in error boundary
  try {
    return (
      <div className={`modal-overlay ${isClosing ? "closing" : ""}`}>
        <div className="modal">
          <canvas
            ref={canvasRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <div className="modal__bar">
            <span className="modal__bar-title">
              <Icon icon="icon-park-solid:align-text-left-one" />
              &nbsp;
              {project.title.length * 25 < screenWidth
                ? project.title
                : project.alt}
            </span>
            <span className="modal__xbar" onClick={handleClose}>
              {" "}
              &#xd7;
            </span>
          </div>
          <div className="modal__contents">
            <div className="modal__image">
              <Icon
                icon={project.logo}
                className="section-logo"
                width="48"
                height="48"
              />
            </div>
            <div className="brief-description">
              <p>
                <b>
                  <Icon
                    icon="material-symbols:keyboard-previous-language"
                    width="1.4rem"
                  />
                  &nbsp;Tags:&nbsp;
                </b>
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </p>
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </div>
          <div className="project-links">
            <span className="project-link">
              <Icon
                icon="material-symbols:media-link"
                width="1.9rem"
                color="#fff"
              />
              <b>&nbsp;Demo:&nbsp;&nbsp;</b>
              {project.link !== undefined && (
                <a
                  href={project.link}
                  className="my-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo link for ${project.title}`}
                >
                  Click Here &nbsp;
                  <Icon icon="mdi:arrow-top-right" className="i" aria-hidden />
                </a>
              )}
              {project.link === undefined && (
                <span className="gray">Unavailable</span>
              )}
            </span>
            <span className="project-link">
              <Icon icon="mdi:github" width="1.9rem" color="#fff" />
              <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
              {project.github !== undefined && (
                <a
                  href={project.github}
                  className="my-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub link for ${project.title}`}
                >
                  Click Here &nbsp;
                  <Icon icon="mdi:arrow-top-right" className="i" aria-hidden />
                </a>
              )}
              {project.github === undefined && (
                <span className="gray">Unavailable</span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  } catch (renderError) {
    console.error("Render error in Modal:", renderError);
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Error rendering project</h1>
        <p>Error: {renderError.message}</p>
        <p>Project: {project.title}</p>
      </div>
    );
  }
};

export default Modal;
