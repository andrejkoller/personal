import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <div className="project-title-container">
            <div className="project-title">
              <h2>Prelude in E Minor</h2>
            </div>
            <div className="project-music-info-container">
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className="project-description-container">
            <div className="project-image">
              <Image
                src="/images/der_abend.jpg"
                alt="Der Abend"
                width={500}
                height={500}
              />
            </div>
            <div className="project-description-text">
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
      <div className="project-video-container">
        <span>
          This piece is currently in production. A video performance will be
          available soon.
        </span>
      </div>
    </>
  );
}
