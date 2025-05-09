import Image from "next/image";
import styles from "../page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["project-title-container"]}>
            <div className={styles["project-title"]}>
              <h2>Gymnopédies</h2>
            </div>
            <div className={styles["project-details"]}>
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className={styles["project-description"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/paris_place_de_la_republique_at_twilight.jpg"
                alt="Paris Place de la République at Twilight"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles["project-text"]}>
              <h4>
                Érik Satie composed these three brief and atmospheric
                compositions in 3/4 time, each of which shares a common theme
                and structure. When experienced, they release a sentimental
                longing for the past or the bittersweet unknown. A time and
                place where you have never been before.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["project-video-container"]}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6SYzyqDeXs4?si=ur5VBVltvUD4mvzF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
