interface LetterSquareProps {
  letter: string;
  hint: "gray" | "yellow" | "green";
  position: number;
  onLetterChange: (newLetter: string) => void;
}

function LetterSquare(
  { letter, hint, position, onLetterChange }: LetterSquareProps,
) {
  const backgroundColor = hint === "green"
    ? "bg-green-500"
    : hint === "yellow"
    ? "bg-yellow-500"
    : "bg-gray-300";
  return (
    <input
      type="text"
      maxLength={1}
      className={`w-12 h-12 border border-gray-400 text-center uppercase font-bold text-lg ${backgroundColor}`}
      value={letter}
      onInput={(e) =>
        onLetterChange((e.target as HTMLInputElement).value.toUpperCase())}
    />
  );
}

export default LetterSquare;
