import React from 'react';
import useCountries from '../../hooks/useCountries';
import CountriesCard from '../../Pages/Home/CountriesCard';

const Countries = () => {
    const [countries] = useCountries()
    console.log(countries);
    return (
        <div class="pb-6">
        <h1 class="text-6xl text-center p-6">Fifa World Cup 2022</h1>
        <div className="grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4">
          {countries.map((countries) => (
            <CountriesCard key={countries.id} countries={countries} />
          ))}
        </div>
      </div>
    );
};

export default Countries;