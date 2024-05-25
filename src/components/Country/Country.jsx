import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
const {name,flags, population, area, cca3} = country;
 const [visited, setVisited] = useState(false);
 const handleVisited =() =>{
  setVisited(!visited);
 }





return (
  <div className="country">
   <h3>{name.common}</h3>
   <img src={flags.png} alt=""/>
   <p>population:{population}</p>
   <p>area:{area}</p>
   <p><small>code:{cca3}</small></p> 
   <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button> 
   <br />


   <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add flag</button> 

   
   <br/>
   <button onClick={handleVisited}>{visited ? 'visited': 'going'}</button>
   {visited ? 'i have visited this country.': 'i want visited'}
  </div>
 );
};

export default Country;