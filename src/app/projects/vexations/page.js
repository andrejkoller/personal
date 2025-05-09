import Image from "next/image";
import styles from "../page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>Vexations</h2>
            </div>
            <div className={styles["project-details"]}>
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/grey_and_silver_whistler.webp"
                alt="Grey and Silver Whistler"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                Composed around 1893, Vexations is an enigmatic and haunting
                work written for solo piano. Its slow, dissonant theme—meant to
                be repeated 840 times—invites the listener into a trance-like
                state that blurs the line between time and emotion. The piece
                evokes a sense of quiet introspection, as if wandering endlessly
                through the corridors of the mind, searching for something lost
                or never known.
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
