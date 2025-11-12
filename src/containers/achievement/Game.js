import React, { useContext } from "react";
import "./Game.scss";
import GameVideoCard from "../../components/gameVideoCard/GameVideoCard";
import { gamesSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Game() {
  const { isDark } = useContext(StyleContext);
  if (!gamesSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading game-heading"
                  : "heading game-heading"
              }
            >
              {gamesSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle game-subtitle"
                  : "subTitle game-subtitle"
              }
            >
              {gamesSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {gamesSection.gameVideos.map((video, i) => (
              <GameVideoCard key={i} videoInfo={video} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
