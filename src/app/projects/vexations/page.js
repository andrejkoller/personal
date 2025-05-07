import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <div className="project-title-container">
            <div className="project-title">
              <h2>Vexations</h2>
            </div>
            <div className="project-music-info-container">
              <p>Solo</p>
              <p>Fortepiano</p>
            </div>
          </div>
          <div className="project-description-container">
            <div className="project-image">
              <Image
                src="/images/grey_and_silver_whistler.webp"
                alt="Grey and Silver Whistler"
                width={500}
                height={500}
              />
            </div>
            <div className="project-description-text">
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
      <div className="project-video-container">
        <span>
          This piece is currently in production. A video performance will be
          available soon.
        </span>
      </div>
    </>
  );
}
