import Image from "next/image";

export default function LesFeuillesMortesPage() {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">
            <h2>
              Les feuilles
              <br /> mortes
            </h2>
          </div>
          <div className="project-music-info-container">
            <p>Solo</p>
            <p>Fortepiano</p>
          </div>
        </div>
        <div className="project-description-container">
          <div className="project-image">
            <Image
              src="/images/street_saverne.jpg"
              alt="Street Saverne"
              width={500}
              height={500}
            />
          </div>
          <div className="project-description-text">
            <h4>
              Jean-Michel Blais&apos; interpretation of Les Feuilles Mortes
              captures the nostalgic essence of the classic French song while
              infusing it with his signature contemporary neoclassical style.
              His delicate touch on the piano brings out the melancholic beauty
              of falling autumn leaves, evoking a sense of longing and
              reflection. With soft, flowing melodies and subtle dynamic shifts,
              the piece feels intimate and cinematic, as if carrying the
              listener through a quiet, golden-hued autumn afternoon.
            </h4>
          </div>
        </div>
      </div>
      <div className="project-video-container">
        <span>
          This piece is currently in production. A video performance will be
          available soon.
        </span>
      </div>
    </div>
  );
}
