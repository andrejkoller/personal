"use client";

import { useEffect, useState } from "react";

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
      <div id="cookie-banner" className="cookie-banner-container">
        <div className="cookie-banner-content">
          <div className="cookie-info">
            <span>
              This website uses cookies due to the integration of YouTube
              videos.
            </span>
            <a
              href="https://policies.google.com/technologies/cookies?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info
            </a>
          </div>
          <div className="cookie-button-container">
            <button onClick={handleCloseCookie}>Got It!</button>
          </div>
        </div>
      </div>
    )
  );
};
