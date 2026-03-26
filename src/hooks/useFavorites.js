import { useLocalStorage } from "./useLocalStorage.js";

export function useFavorites() {
  const [favs, setFavs] = useLocalStorage("fle_favs", []);

  const toggle = (id) => {
    setFavs((previous) => (
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    ));
  };

  return {
    favs,
    toggle,
    is: (id) => favs.includes(id),
  };
}
