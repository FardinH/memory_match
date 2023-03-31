import { useEffect } from "react";
import { useGameContext } from "../../app/Game.context";
import { Card } from "../../App";

export const GameLogic = () => {
  const {
    cards,
    selectedCards,
    setCards,
    setFound,
    setSelectedCards,
    setAttempts,
  } = useGameContext();

  const checkSelectCards = () => {
    const match = selectedCards.every((card, index, array) => {
      return card.key === array[0].key;
    });

    if (selectedCards.length === 2) {
      setAttempts((prev) => prev + 1);

      if (match) {
        setSelectedCards([]);
        setFound((prev) => prev + 1);
      }

      if (!match) {
        setTimeout(() => {
          selectedCards.forEach((card) => updateCardState(card.id, false));
          setSelectedCards([]);
        }, 300);
      }
    }
  };

  const onClickCard = (card: Card, id: number) => {
    if (card.visible) return; // если нажал на уже выбранную карточку
    if (selectedCards.length >= 2) return; // если уже есть 2 выбранных карточки - игнорируем клик

    setSelectedCards((prev) => [...prev, card]);
    updateCardState(id, true);
  };

  const updateCardState = (id: number, state: boolean) => {
    setCards((prev) =>
      prev.map((row) => (row.id === id ? { ...row, visible: state } : row))
    );
  };

  useEffect(() => {
    checkSelectCards();
  }, [selectedCards]);

  return (
    <>
      {cards?.map((card) => (
        <button onClick={() => onClickCard(card, card.id)}>
          <span style={{ visibility: card.visible ? "visible" : "hidden" }}>
            {card.icon}
          </span>
        </button>
      ))}
    </>
  );
};
