"use client";

import { useEffect, useState } from "react";
import styles from "./cookie-banner.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useTranslationContext } from "@/contexts/translation-context";

export const CookieBanner = () => {
  const { t } = useTranslationContext();
  const [isVisible, setIsVisible] = useState(false);

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value}; path=/;${expires}`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const handleCloseCookie = () => {
    setCookie("youtubeConsent", "true", 30);
    setIsVisible(false);
  };

  useEffect(() => {
    const consent = getCookie("youtubeConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  return (
    isVisible && (
      <div
        className={classNames(styles.cookieBannerContainer, {
          [styles.visible]: isVisible,
        })}
      >
        <div className={styles.cookieBannerContent}>
          <div className={styles.cookieBannerText}>
            <span>{t?.cookieBanner.text}</span>
            <Link
              href="https://policies.google.com/technologies/cookies?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t?.cookieBanner.link}
            </Link>
          </div>
          <div className={styles.cookieBannerButton}>
            <button onClick={handleCloseCookie}>
              {t?.cookieBanner.button}
            </button>
          </div>
        </div>
      </div>
    )
  );
};
