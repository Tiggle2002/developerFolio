import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  const { title, subtitle, image, isDark } = talkDetails;

  return (
    <div className={isDark ? "talk-card dark-mode" : "talk-card"}>
      {image && <img src={image} alt={title} className="talk-card-image" />}
      <div className="talk-card-content">
        <h3 className="talk-card-title">{title}</h3>
        <p className="talk-card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
