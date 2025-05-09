import Image from "next/image";
import styles from "../page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>
                Les feuilles
                <br /> mortes
              </h2>
            </div>
            <div className={styles["project-details"]}>
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/street_saverne.jpg"
                alt="Street Saverne"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                Jean-Michel Blais&apos; interpretation of Les Feuilles Mortes
                captures the nostalgic essence of the classic French song while
                infusing it with his signature contemporary neoclassical style.
                His delicate touch on the piano brings out the melancholic
                beauty of falling autumn leaves, evoking a sense of longing and
                reflection. With soft, flowing melodies and subtle dynamic
                shifts, the piece feels intimate and cinematic, as if carrying
                the listener through a quiet, golden-hued autumn afternoon.
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
