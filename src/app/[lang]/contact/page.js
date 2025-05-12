"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";
import { use } from "react";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-header"]}>
          <div className={styles["contact-header-title"]}>
            <h2>{t?.contact.title}</h2>
          </div>
        </div>
        <div className={styles["contact-body"]}>
          <form className={styles["contact-form"]}>
            <div className={styles["contact-form-first-column"]}>
              <div className={styles["contact-form-first-column-content"]}>
                <div className={styles["input-name"]}>
                  <label htmlFor="first-name">
                    {t?.contact.label.firstName} *
                  </label>
                  <input type="text" id="first-name" required />
                </div>
                <div className={styles["input-name"]}>
                  <label htmlFor="last-name">
                    {t?.contact.label.lastName} *
                  </label>
                  <input type="text" id="last-name" required />
                </div>
                <div className={styles["input-email"]}>
                  <label htmlFor="email">{t?.contact.label.email} *</label>
                  <input type="email" id="email" required />
                </div>
                <div className={styles["input-telephone"]}>
                  <label htmlFor="telephone">
                    {t?.contact.label.telephone}
                  </label>
                  <input type="tel" id="telephone" />
                </div>
              </div>
            </div>
            <div className={styles["contact-form-second-column"]}>
              <div className={styles["contact-form-second-column-content"]}>
                <div className={styles["input-subject"]}>
                  <label htmlFor="message">{t?.contact.label.message} *</label>
                  <textarea id="message" rows="10" required></textarea>
                </div>
                <div className={styles["input-submit"]}>
                  <button type="submit">{t?.contact.submit}</button>
                </div>
              </div>
            </div>
            <div className={styles["contact-form-third-column"]}>
              <div className={styles["contact-form-third-column-content"]}>
                <div className={styles["contact-image"]}>
                  <Image
                    src={"/images/birch_forest.jpg"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    alt="Birch Forest"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
