import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {

    const myStyle={
        width: '100%',
        backgroundImage: `url("https://i.ibb.co/Cnb8g2B/fifa-world-cup.jpg")`,
        }

  return (
    <div
      class="hero"
      style={myStyle}
    >
      <div class="hero-content min-h-1 text-center text-neutral-content">
        <div class="pt-96">
          <p class="mb-5 text-white pt-20 text-center">The 2022 FIFA World Cup is scheduled to be the 22nd running of the FIFA World Cup competition.It is scheduled to take place in Qatar from 21 November to 18 December 2022</p>
          <Link style={{textDecoration:'none'}} to="/tickets"><button class="btn btn-warning pt-">Book Your Ticket</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
