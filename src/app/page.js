"use client";

import Image from "next/image";
import { LinkButton } from "./components/LinkButton";
import { useEffect, useRef } from "react";

export default function Home() {
  const lineRef = useRef(null);

  const initLineAnimation = () => {
    const line = lineRef.current;
    if (!line) return;

    const checkPosition = () => {
      const position = line.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        line.classList.add("appear");
        window.removeEventListener("scroll", checkPosition);
      }
    };

    window.addEventListener("scroll", checkPosition);
    checkPosition();
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      initLineAnimation();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <section id="projectShowcase" className="project-showcase-container">
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
      </section>
      <section id="aboutShowcase" className="about-showcase-container">
        <div className="line" ref={lineRef}></div>
        <div className="about-container">
          <div className="about-content">
            <div className="about-description">
              <h2>About</h2>
              <p>
                Hello, I am Andrej Koller, a web developer specializing in
                frontend and backend development.
                <br />
                Aside from coding, I am passionate about playing the piano and
                organ, aiming to create unique and atmospheric performances.
                Through music, I seek to inspire and motivate others by sharing
                meaningful and uplifting pieces.
              </p>
              <LinkButton href="/" isExternal={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
