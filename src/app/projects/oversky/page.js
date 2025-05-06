import Image from "next/image";

export default function Page() {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">
            <h2>Oversky</h2>
          </div>
          <div className="project-music-info-container">
            <p>Solo</p>
            <p>Fortepiano</p>
          </div>
        </div>
        <div className="project-description-container">
          <div className="project-image">
            <Image
              src="/images/mondnacht_am_dnjepr.jpg"
              alt="Mondnacht am Dnjepr"
              width={500}
              height={500}
            />
          </div>
          <div className="project-description-text">
            <h4>
              Luke Howard - &quot;Oversky&quot; is an atmospheric piano piece
              characterized by gentle, floating melodies and a melancholic yet
              hopeful mood. With its minimalist, neoclassical composition, it
              evokes the image of a vast sky (&quot;Oversky&quot;), where delicate sounds
              drift like passing clouds.
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
