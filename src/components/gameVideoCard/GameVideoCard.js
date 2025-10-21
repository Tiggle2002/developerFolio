import React from "react";
import "./GameVideoCard.scss";

export default function GameVideoCard({ videoInfo, isDark }) {
  return (
    <div className={isDark ? "dark-mode game-video-card" : "game-video-card"}>
      <div className="game-video-iframe">
        <iframe
          width="100%"
          height="100%"
          src={videoInfo.videoUrl}
          title={videoInfo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="game-video-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {videoInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {videoInfo.description}
        </p>
      </div>
    </div>
  );
}
