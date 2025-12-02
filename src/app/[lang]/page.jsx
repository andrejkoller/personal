"use client";

import Image from "next/image";
import { LinkButton } from "@/components/link-button/link-button";
import React, { use, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/hooks/use-translation";

export default function Home({ params }) {
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
        line.classList.add(styles.appear);
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
    <div className={styles.home}>
      <section className={styles.project}>
        <div className={styles.projectContainer}>
          <div className={styles.projectContent}>
            <div className={styles.projectImage}>
              <Image
                src={"/images/hades.jpg"}
                alt="Hades"
                width={`${800}`}
                height={`${800}`}
                priority
              />
            </div>
            <div className={styles.projectDescription}>
              <h2>{t?.home.section.project.title}</h2>
              <p>{t?.home.section.project.description}</p>
              <LinkButton
                href="https://linktr.ee/fadinghell"
                isExternal={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div
          className={classNames(styles.line, {
            [styles.appear]: lineAppeared,
          })}
          ref={lineRef}
        ></div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src={"/images/odysseus.jpg"}
                alt="Birch Forest"
                width={`${800}`}
                height={`${800}`}
                priority
              />
            </div>
            <div className={styles.aboutDescription}>
              <h2>{t?.home.section.about.title}</h2>
              <p>{t?.home.section.about.description}</p>
              <LinkButton href={`/${lang}/about`} isExternal={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
