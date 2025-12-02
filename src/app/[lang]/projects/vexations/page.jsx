"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useTranslation } from "@/hooks/use-translation";
import { use } from "react";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  return (
    <div className={styles.project}>
      <div className={styles.projectContainer}>
        <div className={styles.projectContent}>
          <div className={styles.projectTitleContainer}>
            <div className={styles.projectTitle}>
              <h2>{t?.project.vexations.title}</h2>
            </div>
            <div className={styles.projectDetails}>
              <p>{t?.project.category.solo}</p>
              <p>{t?.project.instrument.fortePiano}</p>
            </div>
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.projectImage}>
              <Image
                src="/images/grey_and_silver_whistler.webp"
                alt="Grey and Silver Whistler"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles.projectText}>
              <h4>{t?.project.vexations.description}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectVideoContainer}>
        <span>{t?.project.notification.text}</span>
      </div>
    </div>
  );
}
