import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-header"]}>
          <div className={styles["contact-header-title"]}>
            <h2>Contact</h2>
          </div>
        </div>
        <div className={styles["contact-body"]}>
          <form className={styles["contact-form"]}>
            <div className={styles["contact-form-first-column"]}>
              <div className={styles["contact-form-first-column-content"]}>
                <div className={styles["input-name"]}>
                  <label htmlFor="name">First name *</label>
                  <input type="text" required />
                </div>
                <div className={styles["input-name"]}>
                  <label htmlFor="name">Last name *</label>
                  <input type="text" required />
                </div>
                <div className={styles["input-email"]}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" required />
                </div>
                <div className={styles["input-telephone"]}>
                  <label htmlFor="telephone">Telephone</label>
                  <input type="tel" />
                </div>
              </div>
            </div>
            <div className={styles["contact-form-second-column"]}>
              <div className={styles["contact-form-second-column-content"]}>
                <div className={styles["input-subject"]}>
                  <label htmlFor="message">Message *</label>
                  <textarea rows="10" required></textarea>
                </div>
                <div className={styles["input-submit"]}>
                  <button type="submit">Send</button>
                </div>
              </div>
            </div>
            <div className={styles["contact-form-third-container"]}>
              <div className={styles["contact-form-third-column-content"]}>
                <div className={styles["contact-image"]}>
                  <Image
                    src={"/images/birch_forest.jpg"}
                    width={500}
                    height={500}
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
