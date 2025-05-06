"use client";
import { useEffect } from "react";
import SiriWave from "siriwave";

export const BackgroundMusic = () => {
  const initBackgroundMusic = () => {
    const audio = document.getElementById("backgroundMusic");
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");

    if (!audio || !playButton || !pauseButton) {
      return;
    }

    audio.volume = 0.2;
  };

  const handlePlayClick = () => {
    const audio = document.getElementById("backgroundMusic");
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");

    if (!audio || !playButton || !pauseButton) {
      return;
    }

    audio.play();
    playButton.classList.add("hidden");
    pauseButton.classList.add("visible");
    playButton.classList.remove("visible");
    pauseButton.classList.remove("hidden");
  };

  const handlePauseClick = () => {
    const audio = document.getElementById("backgroundMusic");
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");

    if (!audio || !playButton || !pauseButton) {
      return;
    }

    audio.pause();
    playButton.classList.remove("hidden");
    pauseButton.classList.remove("visible");
    playButton.classList.add("visible");
    pauseButton.classList.add("hidden");
  };

  const initSiriWave = () => {
    const container1 = document.getElementById("siriWave1");
    const container2 = document.getElementById("siriWave2");

    if (container1) container1.innerHTML = "";
    if (container2) container2.innerHTML = "";

    const instance1 = new SiriWave({
      container: container1,
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
      container: container2,
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
        <button className="play-button" onClick={handlePlayClick}>
          <span>Listen</span>
          <span id="siriWave1"></span>
        </button>
        <button className="pause-button" onClick={handlePauseClick}>
          <span>Pause</span>
          <span id="siriWave2"></span>
        </button>
      </div>
      <audio id="backgroundMusic" loop>
        <source src="/audios/gymnopedie_nr_3.wav" type="audio/wav" />
      </audio>
    </div>
  );
};
