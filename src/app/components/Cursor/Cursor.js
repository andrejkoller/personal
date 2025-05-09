"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";
import { usePathname } from "next/navigation";

export const Cursor = () => {
  const cursorRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveHandler = (e) => {
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.opacity = "1";
    };

    const mouseLeaveHandler = () => {
      cursor.style.opacity = "0";
    };

    const mouseEnterHandler = () => {
      cursor.style.opacity = "1";
    };

    const mouseDownHandler = () => {
      cursor.style.transform = "scale(0.5)";
    };

    const mouseUpHandler = () => {
      cursor.style.transform = "scale(1)";
    };

    const interactiveElements = document.querySelectorAll(
      "a, .play-button, .pause-button, button, #menuButton, #closeButton, #linkButton, .filter-button, #solo, #ensemble, #photo, #video, #all, .project-item, .inspiration-item, .gallery-item, .language-button, .input-submit, input, textarea"
    );

    const handleEnterInteractive = () => {
      cursor.style.transform = "scale(0.5)";
    };

    const handleLeaveInteractive = () => {
      cursor.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, [pathname]);

  return <div className={styles["cursor"]} ref={cursorRef}></div>;
};
