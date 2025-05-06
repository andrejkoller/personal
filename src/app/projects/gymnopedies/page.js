import Image from "next/image";

export default function Page() {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">
            <h2>Gymnopédies</h2>
          </div>
          <div className="project-music-info-container">
            <p>Solo</p>
            <p>Fortepiano</p>
          </div>
        </div>
        <div className="project-description-container">
          <div className="project-image">
            <Image
              src="/images/paris_place_de_la_republique_at_twighlight.jpg"
              alt="Paris Place de la République at Twighlight"
              width={500}
              height={500}
            />
          </div>
          <div className="project-description-text">
            <h4>
              Éric Satie composed these three brief and atmospheric compositions
              in 3/4 time, each of which shares a common theme and structure.
              When experienced, they release a sentimental longing for the past
              or the bittersweet unknown. A time and place where you have never
              been before.
            </h4>
          </div>
        </div>
      </div>
      <div className="project-video-container">
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
    </div>
  );
}
