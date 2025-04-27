import { useSignal } from "@preact/signals";
import { h } from "preact";
import GuessRow from "../components/GuessRow.tsx";

export default function WordleGrid() {
  const guesses = useSignal<
    { letter: string; hint: "gray" | "yellow" | "green" }[][]
  >([Array(5).fill({ letter: "", hint: "gray" })]); // start with one empty row
  const maxRows = 6; // maximum number of rows for the game

  const handleLetterChange = (
    rowIndex: number,
    letterIndex: number,
    newLetter: string,
  ) => {
    const currentGuesses = guesses.value;
    if (currentGuesses[rowIndex]) {
      const updatedRow = [...currentGuesses[rowIndex]];
      updatedRow[letterIndex] = {
        ...updatedRow[letterIndex],
        letter: newLetter,
      };
      currentGuesses[rowIndex] = updatedRow;
      guesses.value = [...currentGuesses];
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {guesses.value.map((guess, rowIndex) => (
        <GuessRow
          key={rowIndex}
          guess={guess}
          onLetterChange={(letterIndex, newLetter) =>
            handleLetterChange(rowIndex, letterIndex, newLetter)}
        />
      ))}
    </div>
  );
}
