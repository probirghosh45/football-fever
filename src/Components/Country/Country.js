import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { id } = useParams();
  const [country,setCountry] = useState({})
  const [countryInfo,setCountryInfo] = useState({})

  useEffect(() => {
    // const API_TOKEN ="JyWyjHxentPGBe5CyV3zxIltYiGncD611fMOQinGSkrdICtN8CahKkqbCCBs";
    const url = `https://soccer.sportmonks.com/api/v2.0/countries/${id}?api_token=JyWyjHxentPGBe5CyV3zxIltYiGncD611fMOQinGSkrdICtN8CahKkqbCCBs`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setCountry(data.data)
        setCountryInfo(data.data.extra)

      });
  }, [id]);
  return (
    <div class="p-10">
      {/* <h1>id : {id}</h1> */}
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={country.image_path}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Country : {country.name}</h2>
          <h2 class="card-title">Sub Region : {countryInfo?.sub_region}</h2>
          <h2 class="card-title">World Region : {countryInfo?.world_region}</h2>
          <h2 class="card-title">Continent : {countryInfo?.continent}</h2>
        </div>
      </div>
    </div>
  );
};

export default Country;
