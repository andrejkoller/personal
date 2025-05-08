"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";
import classNames from "classnames";
import Link from "next/link";

export const CookieBanner = () => {
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
        className={classNames(styles["cookie-banner-container"], {
          [styles["visible"]]: isVisible,
        })}
      >
        <div className={styles["cookie-banner-content"]}>
          <div className={styles["cookie-banner-text"]}>
            <span>
              This website uses cookies due to the integration of YouTube
              videos.
            </span>
            <Link
              href="https://policies.google.com/technologies/cookies?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info
            </Link>
          </div>
          <div className={styles["cookie-banner-button"]}>
            <button onClick={handleCloseCookie}>Got It!</button>
          </div>
        </div>
      </div>
    )
  );
};
