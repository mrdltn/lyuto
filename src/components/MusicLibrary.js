import React, { useState, useRef, useEffect } from "react";
import "./MusicLibrary.css";

const initialTracks = [
  { name: "Дом", artist: "группа Люто", url: "/tracks/Home.mp3" },
  { name: "В очереди", artist: "группа Люто", url: "/tracks/In line.mp3" },
  {
    name: "Техника молодёжи",
    artist: "группа Люто",
    url: "/tracks/Youth technology.mp3",
  },

  // Добавьте дополнительные треки
];

function MusicLibrary() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  // Останавливаем трек при размонтировании компонента
  useEffect(() => {
    const audio = audioRef.current;

    // Очистка для остановки аудио, если компонент размонтируется
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleTrackSelect = (track) => {
    if (currentTrack?.url === track.url) {
      setIsPlaying(!isPlaying);
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    } else {
      setCurrentTrack(track);
      audioRef.current.src = track.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="music-library">
      <h1>Музыка</h1>
      <div className="track-grid">
        {initialTracks.map((track, index) => (
          <div
            key={index}
            className="track-card"
            onClick={() => handleTrackSelect(track)}
          >
            <div className="track-info">
              <h3>{track.name}</h3>
              <p>{track.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="player">
          <h2>
            Сейчас играет: {currentTrack.name} - {currentTrack.artist}
          </h2>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Пауза" : "Воспроизвести"}
          </button>
          <button onClick={handleStop}>Стоп</button>
          <div className="volume-control">
            <label>Громкость</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <div className="progress-control">
            <label>Прогресс</label>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleProgressChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicLibrary;
