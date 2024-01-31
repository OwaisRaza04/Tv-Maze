// useApiData.js
import { useState, useEffect } from 'react';

const useApiData = () => {
  const apiEndpoint = 'https://api.tvmaze.com/search/shows?q=all#';
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(apiEndpoint);
        const fetchedData = await response.json();

        // Update state with fetched data
        setData(fetchedData);
        setError(null);
      } catch (error) {
        // Handle errors
        setData([]);
        setError(error.message || 'An error occurred');
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once on mount

  // Return the data and error
  return data;
};

export default useApiData;
