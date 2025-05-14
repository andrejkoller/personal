"use client";

import styles from "./page.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";
import { use, useState } from "react";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      telephone,
      message,
    };

    console.log("Form data:", formData);

    try {
      const res = await fetch("/api/send-email/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", res);

      if (res.ok) {
        setSuccessMessage(t?.contact.message.success);
      } else {
        setErrorMessage(t?.contact.message.error);
      }
    } catch (err) {
      console.error(t?.contact.message.error, err);
    }
  };

  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-header"]}>
          <div className={styles["contact-header-title"]}>
            <h2>{t?.contact.title}</h2>
          </div>
        </div>
        <div className={styles["contact-body"]}>
          <form className={styles["contact-form"]} onSubmit={handleSubmit}>
            {successMessage && (
              <div className={styles["success-message"]}>
                <p>{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div className={styles["error-message"]}>
                <p>{errorMessage}</p>
              </div>
            )}
            <div className={styles["contact-form-first-column"]}>
              <div className={styles["contact-form-first-column-content"]}>
                <div className={styles["input-name"]}>
                  <label htmlFor="first-name">
                    {t?.contact.label.firstName} *
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles["input-name"]}>
                  <label htmlFor="last-name">
                    {t?.contact.label.lastName} *
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles["input-email"]}>
                  <label htmlFor="email">{t?.contact.label.email} *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles["input-telephone"]}>
                  <label htmlFor="telephone">
                    {t?.contact.label.telephone}
                  </label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles["contact-form-second-column"]}>
              <div className={styles["contact-form-second-column-content"]}>
                <div className={styles["input-subject"]}>
                  <label htmlFor="message">{t?.contact.label.message} *</label>
                  <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={styles["contact-form-third-column"]}>
              <div className={styles["contact-form-third-column-content"]}>
                <div className={styles["input-submit"]}>
                  <button type="submit">{t?.contact.submit}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
