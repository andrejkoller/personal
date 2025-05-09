"use client";

import { useEffect, useRef, useState } from "react";
import SiriWave from "siriwave";
import styles from "./BackgroundMusic.module.css";
import classNames from "classnames";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const siriWave1Ref = useRef(null);
  const siriWave2Ref = useRef(null);
  const siriWave1ContainerRef = useRef(null);
  const siriWave2ContainerRef = useRef(null);

  const initBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  };

  const handlePlayClick = () => {
    if (audioRef.current && playButtonRef.current && pauseButtonRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
      playButtonRef.current.classList.add("hidden");
      pauseButtonRef.current.classList.add("visible");
      playButtonRef.current.classList.remove("visible");
      pauseButtonRef.current.classList.remove("hidden");
    }
  };

  const handlePauseClick = () => {
    if (audioRef.current && playButtonRef.current && pauseButtonRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
      playButtonRef.current.classList.remove("hidden");
      pauseButtonRef.current.classList.remove("visible");
      playButtonRef.current.classList.add("visible");
      pauseButtonRef.current.classList.add("hidden");
    }
  };

  const initSiriWave = () => {
    if (!siriWave1Ref.current) {
      siriWave1Ref.current = new SiriWave({
        container: siriWave1ContainerRef.current,
        width: 59,
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
    }

    if (!siriWave2Ref.current) {
      siriWave2Ref.current = new SiriWave({
        container: siriWave2ContainerRef.current,
        width: 54,
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
    }
  };

  useEffect(() => {
    initBackgroundMusic();
    initSiriWave();

    return () => {
      if (siriWave1Ref.current) {
        siriWave1Ref.current.dispose();
        siriWave1Ref.current = null;
      }
      if (siriWave2Ref.current) {
        siriWave2Ref.current.dispose();
        siriWave2Ref.current = null;
      }
    };
  }, []);

  return (
    <div className={styles["background-music-container"]}>
      <div className={styles["background-music-content"]}>
        <button
          className={classNames(styles["play-button"], {
            [styles["hidden"]]: isPlaying,
            [styles["visible"]]: !isPlaying,
          })}
          ref={playButtonRef}
          onClick={handlePlayClick}
        >
          <span>Listen</span>
          <span
            className={styles["siri-wave"]}
            ref={siriWave1ContainerRef}
          ></span>
        </button>
        <button
          className={classNames(styles["pause-button"], {
            [styles["hidden"]]: !isPlaying,
            [styles["visible"]]: isPlaying,
          })}
          ref={pauseButtonRef}
          onClick={handlePauseClick}
        >
          <span>Pause</span>
          <span
            className={styles["siri-wave"]}
            ref={siriWave2ContainerRef}
          ></span>
        </button>
      </div>
      <audio id="backgroundMusic" ref={audioRef} loop>
        <source src="/audios/gymnopedie_nr_3.wav" type="audio/wav" />
      </audio>
    </div>
  );
};
