import React from "react";
import useCountries from "../../hooks/useCountries";
import CountriesCard from "../../Pages/Home/CountriesCard";
import Spinner from "../../Shared/Spinner";

const Countries = () => {
  const [countries, loading] = useCountries();
  console.log(countries);
  return (
    <>
      {loading ? (
        <div class="min-h-screen">
          <Spinner />
        </div>

      ) : (
        <div class="pb-6">
          <h1 class="text-6xl text-center p-6">Fifa World Cup 2022</h1>
          <div className="grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4">
            {countries.map((countries) => (
              <CountriesCard key={countries.id} countries={countries} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Countries;
