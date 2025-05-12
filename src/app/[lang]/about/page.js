"use client";

import { use, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

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
            <h4>{t?.about.section.introduction.subtitle}</h4>
          </div>
          <div className={styles["about-description"]}>
            <div className={styles["about-description-text"]}>
              <p>{t?.about.section.introduction.descriptionOne}</p>
              <p>{t?.about.section.introduction.descriptionTwo}</p>
            </div>
            <div className={styles["about-description-text"]}>
              <p>{t?.about.section.introduction.descriptionThree}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-instruments-container"]}>
        <div className={styles["about-instruments-content"]}>
          <div className={styles["about-instruments-title"]}>
            <h3>{t?.about.section.instruments.title}</h3>
          </div>
          <div className={styles["about-instruments-text"]}>
            <p>
              <span className={styles["about-instrument"]}>
                {t?.about.section.instruments.descriptionOne}
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
              <p>{t?.about.section.thankYou.descriptionOne}</p>
              <p>{t?.about.section.thankYou.descriptionTwo}</p>
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
            <h4>{t?.about.section.audio.title}</h4>
          </div>
          <div className={styles["about-audio-info-text"]}>
            <p>
              {t?.about.section.audio.infoOne}
              <br />
              {t?.about.section.audio.infoTwo}
              <br />
              {t?.about.section.audio.infoThree}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
