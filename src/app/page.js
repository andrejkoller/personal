"use client";

import Image from "next/image";
import { LinkButton } from "./components/LinkButton/LinkButton";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";
import { getDictionary } from "./lib/getDictionary";

export default function Home({ params }) {
  const lang = params?.lang || "en";

  const [t, setT] = useState(null);
  const [lineAppeared, setLineAppeared] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const dictionary = await getDictionary(lang);
        setT(dictionary);
      } catch (error) {
        console.error("Error fetching dictionary:", error);
      }
    };

    fetchDictionary();
  }, [lang]);

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
                src={"/images/hades.jpg"}
                alt="Hades"
                width={`${800}`}
                height={`${800}`}
              />
            </div>
            <div className={styles["project-description"]}>
              <h2>{t?.projectTitle}</h2>
              <p>{t?.projectDescription}</p>
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
                {t?.aboutDescriptionOne}
                <br />
                {t?.aboutDescriptionTwo}
              </p>
              <LinkButton href="/about" isExternal={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
