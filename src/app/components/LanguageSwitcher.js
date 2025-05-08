"use client";

import Link from "next/link";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const [isLanguageActive, setIsLanguageActive] = useState("en");

  return (
    <div className="language-switcher-container">
      <div className="language-switcher-content">
        <ul className="languages">
          <li>
            <Link
              href={"/"}
              className={`language-button ${
                isLanguageActive === "en" ? "active" : ""
              }`}
              onClick={() => setIsLanguageActive("en")}
            >
              English
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/de"}
              className={`language-button ${
                isLanguageActive === "de" ? "active" : ""
              }`}
              onClick={() => setIsLanguageActive("de")}
            >
              Deutsch
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/ru"}
              className={`language-button ${
                isLanguageActive === "ru" ? "active" : ""
              }`}
              onClick={() => setIsLanguageActive("ru")}
            >
              Русский
              <span></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
