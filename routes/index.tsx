import WordleGrid from "../islands/WordleGrid.tsx";

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Wordle Solver</h1>
      <WordleGrid />
    </div>
  );
}
