"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";
import { use } from "react";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  return (
    <div className={styles["project"]}>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>{t?.project.gymnopedies.title}</h2>
            </div>
            <div className={styles["project-details"]}>
              <p>{t?.project.category.solo}</p>
              <p>{t?.project.instrument.fortePiano}</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/paris_place_de_la_republique_at_twilight.jpg"
                alt="Paris Place de la République at Twilight"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>{t?.project.gymnopedies.description}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["project-video-container"]}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6SYzyqDeXs4?si=ur5VBVltvUD4mvzF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
