import React from "react";

const GroupCart = ({ groupData }) => {
  //   console.log(groupData);
  const {group,flag_1,flag_2,flag_3,flag_4 ,team_1, team_2, team_3, team_4 } = groupData;
  return (
    <>
      <div class="card card-side bg-base-200 shadow-xl bg-gray-500 ">
        <div class="my-48 px-5"><h1 class="text-3xl align-middle" >{group}</h1></div>
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body text-center">
          <div class="flex flex-grow ">
          <img class="w-32 h-16" src={flag_1} alt="flag" />
          <h1 class="card-title  p-3">{team_1}</h1>
          </div>
          <div class="flex flex-grow ">
          <img class="w-32 h-16" src={flag_2} alt="flag" />
            <h1  class="card-title  p-3">{team_2}</h1>
          </div>
          <div class="flex flex-grow ">
          <img class="w-32 h-16" src={flag_3} alt="flag" />
            <h1 class="card-title  p-3">{team_3}</h1>
          </div>
          <div class="flex flex-grow ">
          <img class="w-32 h-16" src={flag_4} alt="flag" />
          <h1 class="card-title  p-3">{team_4}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupCart;
