"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

export default function Page() {
  const [lineAppeared, setLineAppeared] = useState(false);
  const lineRef = useRef(null);

  const initLineAnimation = () => {
    const line = lineRef.current;
    if (!line) return;

    const checkPosition = () => {
      const position = line.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        line.classList.add(styles["appear"]);
        setLineAppeared(true);
        window.removeEventListener("scroll", checkPosition);
      }
    };

    window.addEventListener("scroll", checkPosition);
    checkPosition();
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      initLineAnimation();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <div className={styles["about-container"]}>
        <div className={styles["about-content"]}>
          <div className={styles["about-title"]}>
            <h4>Bridging Code, Creativity, and Curiosity</h4>
          </div>
          <div className={styles["about-description"]}>
            <div className={styles["about-description-text"]}>
              <p>
                Thank you for taking the time to learn more about me. My days
                are largely filled with planning and programming, where I focus
                on web development and data management. I&apos;m always eager to
                expand my knowledge, explore new technologies, and refine my
                skills. If you&apos;re interested in the specific tools and
                programming languages I work with, feel free to check out my
                GitHub profile.
              </p>
              <p>
                If you&apos;re curious about my projects, I encourage you to
                explore my GitHub for both current and future uploads.
                You&apos;ll find all relevant links at the end of each page.
              </p>
            </div>
            <div className={styles["about-description-text"]}>
              <p>
                Beyond programming, music plays a vital role in my life. Playing
                classical piano and organ allows me to immerse myself in
                different musical worlds, shaped by composers such as Satie,
                Schumann, Mozart, and Chopin. I have a deep passion for
                forgotten and lesser-known organ music, both historical and
                contemporary, and enjoy uncovering lost works to bring them back
                to life. Through my YouTube channel, I share a unique collection
                of organ and piano recordings, showcasing the beauty of these
                instruments across various styles. If you&apos;re interested in
                collaborating on musical projects, feel free to reach
                out—I&apos;m always open to new connections.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-instruments-container"]}>
        <div className={styles["about-instruments-content"]}>
          <div className={styles["about-instruments-title"]}>
            <h3>Instruments</h3>
          </div>
          <div className={styles["about-instruments-text"]}>
            <p>
              <span className={styles["about-instrument"]}>
                A Yamaha YDP 164B, an 88-key digital piano with fully weighted
                keys that replicate the feel of an acoustic grand.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["about-thanks-container"]}>
        <div className={styles["about-thanks-content"]}>
          <div className={styles["about-thanks-text"]}>
            <div
              className={classNames(styles["line"], {
                [styles["appear"]]: lineAppeared,
              })}
              ref={lineRef}
            ></div>
            <div className={styles["about-thanks-text-content"]}>
              <p>
                I want to thank everyone who truly listens to me and understands
                me—especially through my music.
              </p>
              <p>Andrej Koller</p>
            </div>
            <div
              className={classNames(styles["line"], {
                [styles["appear"]]: lineAppeared,
              })}
              ref={lineRef}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["about-audio-info-container"]}>
        <div className={styles["about-audio-info-content"]}>
          <div className={styles["about-audio-info-title"]}>
            <h4>Audio</h4>
          </div>
          <div className={styles["about-audio-info-text"]}>
            <p>
              Trois Gymnopédies - <br />
              Gymnopédie No. 3, <br />
              Éric Satie
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
