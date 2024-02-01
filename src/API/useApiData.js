import { useState, useEffect } from 'react';

const useApiData = () => {
  const apiEndpoint = 'https://api.tvmaze.com/search/shows?q=all#';
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const fetchedData = await response.json();

        setData(fetchedData);
        setError(null);
      } catch (error) {
        // Handle errors
        setData([]);
        setError(error.message || 'An error occurred');
      }
    };

    fetchData();
  }, []); 

  
  return data;
};

export default useApiData;
