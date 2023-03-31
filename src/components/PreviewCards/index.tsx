import { Card } from "../../App";
import { useGameContext } from "../../app/Game.context";

export const PreviewCards = () => {
  const { cards } = useGameContext();
  return (
    <>
      {cards?.map((card) => (
        <button>
          <span>{card.icon}</span>
        </button>
      ))}
    </>
  );
};
