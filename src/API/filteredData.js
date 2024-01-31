// useFilteredApiData.js
import { useState, useEffect } from "react";
import useApiData from "./useApiData";

const useFilteredApiData = (filterId) => {
  const allData = useApiData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the data based on the provided ID
    const newFilteredData = [];
    filterId = parseInt(filterId);
    allData.forEach((item) => {
      if (item.show.id === filterId) {
        newFilteredData.push(item);
      }
    });

    setFilteredData(newFilteredData);
  }, [allData, filterId]); // Depend on allData and filterId to refetch when they change
  console.log(filteredData);

  return filteredData;
};

export default useFilteredApiData;
