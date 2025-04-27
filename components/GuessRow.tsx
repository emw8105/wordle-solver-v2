import { h } from "preact";
import LetterSquare from "./LetterSquare.tsx";

interface GuessRowProps {
  guess: { letter: string; hint: "gray" | "yellow" | "green" }[];
  onLetterChange: (index: number, newLetter: string) => void;
}

function GuessRow({ guess, onLetterChange }: GuessRowProps) {
  return (
    <div className="flex space-x-2">
      {guess.map((square, index) => (
        <LetterSquare
          key={index}
          letter={square.letter}
          hint={square.hint}
          position={index}
          onLetterChange={(newLetter) => onLetterChange(index, newLetter)}
        />
      ))}
    </div>
  );
}

export default GuessRow;
