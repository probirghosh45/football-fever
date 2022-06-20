import { useEffect, useState } from 'react';

const useCountries = () => {
   const [countries,setCountries] = useState([])
   
   useEffect( ()=>{
    const API_TOKEN = 'JyWyjHxentPGBe5CyV3zxIltYiGncD611fMOQinGSkrdICtN8CahKkqbCCBs'
      fetch(`https://soccer.sportmonks.com/api/v2.0/countries?api_token=${API_TOKEN}`)
      .then(res => res.json())
      .then(data => setCountries(data.data))
   },[])

   return [countries,setCountries]
};

export default useCountries;