import useCountry from "../Hooks/useCountry";

const CountryUsingHook = () => {
  console.log("before state");

  const [country, error] = useCountry("Finland");
  console.log("using hook", country);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {country &&
            country.map((country_name) => {
              return (
                <div key={country_name.cca2}>
                  <p>
                    Fetched Country Name using React Hook:{" "}
                    {country_name.name.common}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default CountryUsingHook;
