import { useEffect, useState } from "react";

const useCountry = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseURL = `https://restcountries.com/v3.1/name/${name}`;
    console.log("useCountry Hook: ", name);

    const getCountryByName = async () => {
      try {
        const req = await fetch(baseURL);
        if (!req.ok) {
          throw new Error("Error, Request Not Found!");
        }
        const res = await req.json();
        setData(res.data || res);
      } catch (err) {
        setError(err);
      }
    };
    getCountryByName();
  }, [name]);

  return [data, error];
};

export default useCountry;
