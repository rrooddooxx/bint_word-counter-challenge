import { appData } from "./appData.js";

export const fetchData = async (length = 0, limit = 20) => {
  try {
    const { apiUrl } = appData;
    const response = await fetch(`${apiUrl}?length=${length}&limit=${limit}`);
    const { data } = await response.json();

    return {
      id: parseInt(data.id),
      title: data.title,
      ranking: data.ranking.map(({ position, word, occurrences }) => {
        return { position, word, occurrences };
      }),
    };
  } catch (error) {
    throw new Error("Error en el fetch a la API");
  }
};
