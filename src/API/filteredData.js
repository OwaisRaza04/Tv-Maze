
import { useState, useEffect } from "react";
import useApiData from "./useApiData";

const useFilteredApiData = (filterId) => {
  const allData = useApiData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newFilteredData = [];
    filterId = parseInt(filterId);
    allData.forEach((item) => {
      if (item.show.id === filterId) {
        newFilteredData.push(item);
      }
    });

    setFilteredData(newFilteredData);
  }, [allData, filterId]); 
  console.log(filteredData);

  return filteredData;
};

export default useFilteredApiData;
