import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData.js";

export const useFetch = (wordLength = 0, resultsLimit = 10, reloadAction) => {
  const [rowData, setRowData] = useState({ id: 0, title: "", ranking: [] });
  const [isLoading, setIsLoading] = useState(true);

  const apiFetch = async (length, Limit) => {
    const response = await fetchData(length, Limit);
    setRowData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    // agrego 500ms de delay
    setTimeout(() => {
      apiFetch(wordLength, resultsLimit);
    }, 500);

    return () => {
      setIsLoading(true);
    };
  }, [wordLength, resultsLimit, reloadAction]);

  return [rowData, isLoading];
};
