import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <div className="project-title-container">
            <div className="project-title">
              <h2>Gnossiennes</h2>
            </div>
            <div className="project-music-info-container">
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className="project-description-container">
            <div className="project-image">
              <Image
                src="/images/allee_zum_schlosskammer.jpeg"
                alt="Allee zum Schloss"
                width={500}
                height={500}
              />
            </div>
            <div className="project-description-text">
              <h4>
                Composed between 1890 and 1897, Satie&apos;s Gnossiennes exist in a
                realm beyond traditional form or time. Without bar lines or
                conventional tempo, they drift like musical incense—weightless,
                enigmatic, and inward. The melodies feel ancient and unfamiliar,
                as though they were unearthed rather than written, and the
                harmonies wander with an almost ritualistic logic. Silence is
                not merely a pause here; it becomes a partner to the notes,
                shaping meaning through absence as much as presence.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-video-container">
        <span>
          This piece is currently in production. A video performance will be
          available soon.
        </span>
      </div>
    </>
  );
}
