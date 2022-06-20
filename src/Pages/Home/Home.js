import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import HeroSection from "./HeroSection";
import useCountries from "../../hooks/useCountries";
import CountriesCard from "./CountriesCard";

const Home = () => {
  // const [countries,setCountries] = useState([])

  // useEffect( ()=>{
  //  const API_TOKEN = 'JyWyjHxentPGBe5CyV3zxIltYiGncD611fMOQinGSkrdICtN8CahKkqbCCBs'
  //    fetch(`https://soccer.sportmonks.com/api/v2.0/countries?api_token=${API_TOKEN}`)
  //    .then(res => res.json())
  //    .then(data => setCountries(data.data))
  // },[])
  const [countries] = useCountries();
  console.log(countries);
  const selectedCountries = countries.slice(0, 6);
  console.log(selectedCountries);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div class="pb-6">
        <h1 class="text-6xl text-center p-6">Fifa World Cup 2022</h1>
        <div className="grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4">
          {selectedCountries.map((countries) => (
            <CountriesCard key={countries.id} countries={countries} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
