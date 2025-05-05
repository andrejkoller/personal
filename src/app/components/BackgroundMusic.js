export const BackgroundMusic = () => {
  return (
    <div className="background-music-container">
      <div className="background-music-content">
        <audio id="backgroundMusic" loop></audio>
        <source src="/audios/gymnopedie_nr_3.wav" type="audio/wav" />
      </div>
    </div>
  );
};
