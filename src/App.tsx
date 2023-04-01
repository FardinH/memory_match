import { useCallback, useEffect, useState } from "react";

import "./App.css";
import { GameLogic, PreviewCards } from "./components";
import { GameProvider } from "./app/Game.context";
import { usePreview } from "./shared/hooks/usePreview";

const data: Card[] = [
  { id: 1, icon: "🟢", key: "green", visible: false },
  { id: 2, icon: "🟣", key: "purple", visible: false },
  { id: 3, icon: "🟣", key: "purple", visible: false },
  { id: 4, icon: "🟢", key: "green", visible: false },

  { id: 5, icon: "🟠", key: "orange", visible: false },
  { id: 6, icon: "🟡", key: "yellow", visible: false },
  { id: 7, icon: "🟤", key: "brown", visible: false },
  { id: 8, icon: "🟦", key: "blue", visible: false },
  { id: 9, icon: "🟤", key: "brown", visible: false },
  { id: 10, icon: "☝", key: "top", visible: false },
  { id: 11, icon: "🟥", key: "red", visible: false },
  { id: 12, icon: "🟡", key: "yellow", visible: false },
  { id: 13, icon: "🟠", key: "orange", visible: false },

  { id: 14, icon: "🟥", key: "red", visible: false },
  { id: 15, icon: "🟦", key: "blue", visible: false },
  { id: 16, icon: "☝", key: "top", visible: false },
];

export interface Card {
  id: number;
  icon: string;
  key: string;
  visible: boolean;
}

function App() {
  const [cards, setCards] = useState(data);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const [found, setFound] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const previewCard = usePreview(2000);

  return (
    <div>
      <GameProvider
        value={{
          cards,
          found,
          previewCard,
          selectedCards,
          setSelectedCards,
          setCards,
          setFound,
          attempts,
          setAttempts,
        }}
      >
        {!previewCard && <h3>Найдено совпадений: {found}</h3>}
        {!previewCard && <h3>Всего попыток: {attempts}</h3>}

        <div className='App'>
          {!previewCard && <GameLogic />}
          {previewCard && <PreviewCards />}
        </div>
      </GameProvider>
    </div>
  );
}

export default App;
