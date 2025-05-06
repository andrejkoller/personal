"use client";

import { useEffect, useRef } from "react";
import SiriWave from "siriwave";

export const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);

  const initBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  };

  const handlePlayClick = () => {
    if (audioRef.current && playButtonRef.current && pauseButtonRef.current) {
      audioRef.current.play();
      playButtonRef.current.classList.add("hidden");
      pauseButtonRef.current.classList.add("visible");
      playButtonRef.current.classList.remove("visible");
      pauseButtonRef.current.classList.remove("hidden");
    }
  };

  const handlePauseClick = () => {
    if (audioRef.current && playButtonRef.current && pauseButtonRef.current) {
      audioRef.current.pause();
      playButtonRef.current.classList.remove("hidden");
      pauseButtonRef.current.classList.remove("visible");
      playButtonRef.current.classList.add("visible");
      pauseButtonRef.current.classList.add("hidden");
    }
  };

  const initSiriWave = () => {
    const instance1 = new SiriWave({
      container: document.getElementById("siriWave1"),
      width: 65,
      height: 40,
      speed: 0.1,
      color: "#EAD8C2",
      amplitude: 0.4,
      curveDefinition: [
        {
          attenuation: 3,
          lineWidth: 1,
          opacity: 1,
        },
      ],
    });

    const instance2 = new SiriWave({
      container: document.getElementById("siriWave2"),
      width: 57,
      height: 40,
      speed: 0.1,
      color: "#EAD8C2",
      amplitude: 3,
      curveDefinition: [
        {
          attenuation: 3,
          lineWidth: 1,
          opacity: 1,
        },
      ],
    });
  };

  useEffect(() => {
    initBackgroundMusic();
    initSiriWave();
  }, []);

  return (
    <div className="background-music-content">
      <div className="background-music-button-container">
        <button className="play-button" ref={playButtonRef} onClick={handlePlayClick}>
          <span>Listen</span>
          <span id="siriWave1"></span>
        </button>
        <button className="pause-button" ref={pauseButtonRef} onClick={handlePauseClick}>
          <span>Pause</span>
          <span id="siriWave2"></span>
        </button>
      </div>
      <audio id="backgroundMusic" ref={audioRef} loop>
        <source src="/audios/gymnopedie_nr_3.wav" type="audio/wav" />
      </audio>
    </div>
  );
};
