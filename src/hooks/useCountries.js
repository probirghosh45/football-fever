import { useEffect, useState } from 'react';

const useCountries = () => {
   const [countries,setCountries] = useState([])
   
   useEffect( ()=>{
    const API_TOKEN = 'oJt1O2wy8gaaOwzUpS7knD2qBisO60u1w6Lgq8fcmnCgD9VYUMAHLmRf30O8'
      fetch(`https://soccer.sportmonks.com/api/v2.0/countries?api_token=${API_TOKEN}`)
      .then(res => res.json())
      .then(data => {
         setCountries(data.data)
         // console.log('API Data',data);
      })
   },[])

   return [countries,setCountries]
};

export default useCountries;