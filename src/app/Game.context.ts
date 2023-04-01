import { createContext, useContext } from "react";
import { Card } from "../App";

export interface ContextParams {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;

  selectedCards: Card[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Card[]>>;

  previewCard: boolean;

  found: number;
  setFound: React.Dispatch<React.SetStateAction<number>>;

  attempts: number;
  setAttempts: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ContextParams | null>(null);

export const GameProvider = Context.Provider;

export const useGameContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw Error(
      "Hook `useGameContext` can be used only inside <GameProvider/>"
    );
  }

  return context;
};
