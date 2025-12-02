"use client";

import styles from "./page.module.css";
import { useTranslation } from "@/hooks/use-translation";
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
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeader}>
          <div className={styles.contactHeaderTitle}>
            <h2>{t?.contact.title}</h2>
          </div>
        </div>
        <div className={styles.contactBody}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            {successMessage && (
              <div className={styles.successMessageContainer}>
                <div className={styles.successMessageContent}>
                  <div className={styles.successMessage}>
                    <p>{successMessage}</p>
                  </div>
                  <div className={styles.successMessageClose}>
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
              <div className={styles.errorMessageContainer}>
                <div className={styles.errorMessageContent}>
                  <div className={styles.errorMessage}>
                    <p>{errorMessage}</p>
                  </div>
                  <div className={styles.errorMessageClose}>
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
            <div className={styles.contactFormFirstColumn}>
              <div className={styles.contactFormFirstColumnContent}>
                <div className={styles.inputName}>
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
                <div className={styles.inputName}>
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
                <div className={styles.inputEmail}>
                  <label htmlFor="email">{t?.contact.label.email} *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputTelephone}>
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
            <div className={styles.contactFormSecondColumn}>
              <div className={styles.contactFormSecondColumnContent}>
                <div className={styles.inputSubject}>
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
            <div className={styles.contactFormThirdColumn}>
              <div className={styles.contactFormThirdColumnContent}>
                <div className={styles.inputSubmit}>
                  <button type="submit">{t?.contact.submit}</button>
                </div>
              </div>
            </div>
          </form>
          <div className={styles.contactImage}>
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
