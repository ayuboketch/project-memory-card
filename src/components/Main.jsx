
import React, { useState } from 'react';
import style from './Main.module.css';
import Card from './Card.jsx';

export default function Main() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  return (
    <>
      <div className={style.Main}>
        <div className={style.MainHeader}>
          <div className={style.HeaderRight}>
            <h1>Coffee Memory Game</h1>
            <p>Get points by clicking on an image but don't click on any of the pictures more than once!</p>
          </div>
          <div className={style.HeaderLeft}>
            <p>score: {score}</p>
            <p>Top Score: {highScore}</p>
          </div>
        </div>
        <div>
          <Card onScoreUpdate={handleScoreUpdate} />
        </div>
      </div>
    </>
  );
}
