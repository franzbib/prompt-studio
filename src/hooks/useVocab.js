import { useLocalStorage } from "./useLocalStorage.js";

export function useVocab() {
  const [entries, setEntries] = useLocalStorage("fle_vocab", []);

  const add = (entry) => {
    setEntries((previous) => [
      {
        ...entry,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      },
      ...previous,
    ]);
  };

  const remove = (id) => {
    setEntries((previous) => previous.filter((entry) => entry.id !== id));
  };

  const exportCSV = () => {
    const csv = [
      "Mot;Traduction;Categorie;Exemple;Niveau",
      ...entries.map((entry) => (
        `${entry.word};${entry.translation};${entry.category};${entry.example};${entry.level}`
      )),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement("a"), {
      href: url,
      download: "vocabulaire_fle.csv",
    });

    link.click();
    URL.revokeObjectURL(url);
  };

  return { entries, add, remove, exportCSV };
}
