import React from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({countries}) => {
    // console.log(countries);
    // const {continent,flag,fifa} = countries.extra
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={countries.image_path}
            alt="National Flag"
          />
        </figure>
        <div class="card-body">
        <h2 class="card-title">{countries.name}</h2>
          <div class="card-actions justify-end">
            <Link to={`/country-details/${countries.id}`} ><button class="btn btn-primary">Learn More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
