export function DifficultyDots({ value }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`w-1.5 h-1.5 rounded-full ${index <= value ? "bg-slate-500" : "bg-slate-200"}`}
        />
      ))}
    </span>
  );
}
