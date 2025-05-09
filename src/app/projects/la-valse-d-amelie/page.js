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
                La Valse
                <br /> d&apos;Amelie
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
                src="/images/interior_with_pink_wallpaper.jpg"
                alt="Interior with Pink Wallpaper"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                La Valse d&apos;Amelie is a delicate and whimsical piece that
                captures the essence of a dreamlike waltz. Its gentle melodies
                and intricate harmonies evoke a sense of nostalgia and longing,
                as if wandering through a world of memories. The music dances
                gracefully, inviting the listener to lose themselves in its
                enchanting rhythm, creating a bittersweet atmosphere that
                lingers long after the last note fades away.
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
