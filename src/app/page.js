"use client";

import Image from "next/image";
import { LinkButton } from "./components/LinkButton/LinkButton";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

export default function Home() {
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
      <section className={styles["project"]}>
        <div className={styles["project-container"]}>
          <div className={styles["project-content"]}>
            <div className={styles["project-image"]}>
              <Image
                src={"/images/old_battersea_bridge.jpg"}
                alt="Old Battersea Bridge"
                width={`${800}`}
                height={`${800}`}
              />
            </div>
            <div className={styles["project-description"]}>
              <h2>Fading Hell</h2>
              <p>A music project that I&apos;m currently working on.</p>
              <LinkButton
                href="https://linktr.ee/fadinghell"
                isExternal={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles["about"]}>
        <div
          className={classNames(styles["line"], {
            [styles["appear"]]: lineAppeared,
          })}
          ref={lineRef}
        ></div>
        <div className={styles["about-container"]}>
          <div className={styles["about-content"]}>
            <div className={styles["about-description"]}>
              <h2>About</h2>
              <p>
                Hello, I am Andrej Koller, a web developer specializing in
                frontend and backend development.
                <br />
                Aside from coding, I am passionate about playing the piano and
                organ, aiming to create unique and atmospheric performances.
                Through music, I seek to inspire and motivate others by sharing
                meaningful and uplifting pieces.
              </p>
              <LinkButton href="/about" isExternal={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
