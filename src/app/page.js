import Image from "next/image";
import { LinkButton } from "./components/LinkButton";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="video-container"></div>
        <div className="project-container">
          <div className="project-content">
            <div className="project-image">
              <Image
                src={"/images/old_battersea_bridge.jpg"}
                alt="Old Battersea Bridge"
                width={`${800}`}
                height={`${800}`}
              />
            </div>
            <div className="project-description">
              <h2>Fading Hell</h2>
              <p>A music project that I&apos;m currently working on.</p>
              <LinkButton
                href="https://linktr.ee/fadinghell"
                isExternal={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
