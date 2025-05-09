import Image from "next/image";
import styles from "../page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>Gnossiennes</h2>
            </div>
            <div className={styles["project-details"]}>
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/allee_zum_schlosskammer.jpeg"
                alt="Allee zum Schloss"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                Satie&apos;s Gnossiennes exist in a realm beyond traditional
                form or time. Without bar lines or conventional tempo, they
                drift like musical incense—weightless, enigmatic, and inward.
                The melodies feel ancient and unfamiliar, as though they were
                unearthed rather than written, and the harmonies wander with an
                almost ritualistic logic. Silence is not merely a pause here; it
                becomes a partner to the notes, shaping meaning through absence
                as much as presence.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["project-video-container"]}>
        <span>
          This piece is currently in production. A video performance will be
          available soon.
        </span>
      </div>
    </>
  );
}
