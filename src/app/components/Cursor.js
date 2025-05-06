"use client";
import { useEffect } from "react";

export const Cursor = () => {
  const initCursor = () => {
    let cursor = document.querySelector(".cursor");
    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });

    document.addEventListener("mousedown", () => {
      cursor.style.transform = "scale(0.5)";
    });

    document.addEventListener("mouseup", () => {
      cursor.style.transform = "scale(1)";
    });

    document
      .querySelectorAll(
        "a, .play-button, .pause-button, #menuButton, #closeButton, #linkButton, #solo, #ensemble, #photo, #video, #all, .inspiration-item"
      )
      .forEach((item) => {
        item.addEventListener("mouseenter", () => {
          cursor.style.transform = "scale(0.5)";
        });

        item.addEventListener("mouseleave", () => {
          cursor.style.transform = "scale(1)";
        });
      });
  };

  useEffect(() => {
    initCursor();
  }, []);

  return <div className="cursor"></div>;
};
