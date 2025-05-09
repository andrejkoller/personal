import Image from "next/image";
import styles from "../page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>Prélude in e minor</h2>
            </div>
            <div className={styles["project-details"]}>
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/der_abend.jpg"
                alt="Der Abend"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                Composed in 1839, this short prelude is a masterwork of
                emotional compression. With just a few mournful chords and a
                descending melodic line, Chopin evokes a profound sense of
                resignation, loss, and quiet despair. The piece unfolds like a
                slow exhale—gentle but inevitable—each harmony deepening the
                weight of unspoken sorrow. It feels as though time has slowed to
                a standstill, and the music lingers in a moment of suspended
                grief, echoing the vulnerability of a soul on the edge of
                memory.
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
