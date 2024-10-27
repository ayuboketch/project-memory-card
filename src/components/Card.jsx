import React, { useState, useEffect } from 'react';
import style from './Card.module.css';

export default function Card({ onScoreUpdate }) {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);

  async function getCoffee() {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await response.json();
      setCoffees(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoffee();
  }, []);

  const shuffleCards = () => {
    const shuffledCoffees = [...coffees];
    for (let i = shuffledCoffees.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCoffees[i], shuffledCoffees[j]] = [shuffledCoffees[j], shuffledCoffees[i]];
    }
    setCoffees(shuffledCoffees);
  };

  const handleClick = (coffeeId) => {
    if (clickedCards.includes(coffeeId)) {
      // Card has been clicked before, reset score
      onScoreUpdate(0); // Notify parent component to reset score
      setClickedCards([]);
    } else {
      // Card clicked for the first time, update score
      onScoreUpdate(clickedCards.length + 1); // Notify parent component to update score
      setClickedCards([...clickedCards, coffeeId]);
    }
    shuffleCards(); // Shuffle cards only once per click
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={style.CardOutter}>
      {coffees.map((coffee) => (
        <div
          key={coffee.id}
          className={style.Card}
          onClick={() => handleClick(coffee.id)}
        >
          <img className={style.CardImage} src={coffee.image} alt={`${coffee.title} coffee`} />
          <h1 className={style.CardName}>{coffee.title}</h1>
        </div>
      ))}
    </div>
  );
}
