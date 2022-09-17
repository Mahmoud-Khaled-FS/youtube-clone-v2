import { useEffect, useState } from 'react';

const useFetch = (link: string) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const url = link;

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e7fb31678dmsh280bae248c42e19p14372djsn2c1934e8ae7e',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
          },
        };
        const result = await fetch(url, options);
        const dataFetced = await result.json();
        setLoading(false);
        setData(dataFetced);
      } catch (err) {
        setError(true);
      }
    })();
  }, [link]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
