import React from "react";


const CountriesCard = ({countries}) => {
    console.log(countries);
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
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
