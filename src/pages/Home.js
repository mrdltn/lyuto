import React, { useState, useEffect } from "react";
import "./Home.css";
// import videoFile from ""; // Замените путь на фактический путь к вашему видео

function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowText(false);
    }, 4000);

    const removeTimer = setTimeout(() => {
      setShowText(null);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src="/videobanner.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      {showText !== null && (
        <div className={`welcome-text ${showText ? "fade-in" : "fade-out"}`}>
          Добро пожаловать на сайт группы Люто!
        </div>
      )}
    </div>
  );
}

export default Home;
