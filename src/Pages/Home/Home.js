import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import HeroSection from "./HeroSection";
import useCountries from "../../hooks/useCountries";
import CountriesCard from "./CountriesCard";
import { Link } from "react-router-dom";
import Groups from "../../Components/Groups/Groups";

const Home = () => {
  const [countries] = useCountries();
  //   console.log(countries);
  const selectedCountries = countries.slice(0, 6);
  //   console.log(selectedCountries);
  return (
    <div >
      {/* <Navbar /> */}
      <HeroSection />
      <div class="pb-6" id="selected-countries">
        <h1 class="text-6xl text-center p-6">Fifa World Cup 2022</h1>
        <div className="grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4">
          {selectedCountries.map((countries) => (
            <CountriesCard key={countries.id} countries={countries} />
          ))}
        </div>
        <div class="text-center p-10">
          <Link to="/countries">
            <button class="btn btn-success btn-wide loading ">
              All Countries
            </button>
          </Link>
        </div>
      </div>
      <Groups/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
