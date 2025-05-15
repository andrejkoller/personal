"use client";

import styles from "./page.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";
import { isValidPhoneNumber } from "libphonenumber-js";
import Image from "next/image";
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

    if (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      if (!isValidEmail(email)) {
        setErrorMessage(t?.contact.message.invalidEmail);
        return;
      }

      if (telephone && !isValidPhoneNumber(telephone)) {
        setErrorMessage(t?.contact.message.invalidPhone);
        return;
      }

      try {
        const res = await fetch("/api/send-email/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setSuccessMessage(t?.contact.message.success);
          setFirstName("");
          setLastName("");
          setEmail("");
          setTelephone("");
          setMessage("");
        } else {
          setErrorMessage(t?.contact.message.error);
        }
      } catch (err) {
        console.error(t?.contact.message.error, err);
      }
    } else {
      setErrorMessage(t?.contact.message.emptyFields);
    }
  };

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

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
              <div className={styles["success-message-container"]}>
                <div className={styles["success-message-content"]}>
                  <div className={styles["success-message"]}>
                    <p>{successMessage}</p>
                  </div>
                  <div className={styles["success-message-close"]}>
                    <button
                      type="button"
                      onClick={() => {
                        setSuccessMessage("");
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setTelephone("");
                        setMessage("");
                      }}
                    >
                      {t?.contact.close}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {errorMessage && (
              <div className={styles["error-message-container"]}>
                <div className={styles["error-message-content"]}>
                  <div className={styles["error-message"]}>
                    <p>{errorMessage}</p>
                  </div>
                  <div className={styles["error-message-close"]}>
                    <button
                      type="button"
                      onClick={() => {
                        setErrorMessage("");
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setTelephone("");
                        setMessage("");
                      }}
                    >
                      {t?.contact.close}
                    </button>
                  </div>
                </div>
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
          <div className={styles["contact-image"]}>
            <Image
              src="/images/park_at_night.jpg"
              alt="Park at night"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
