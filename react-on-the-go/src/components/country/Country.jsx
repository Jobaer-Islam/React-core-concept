import React from 'react';

const Country = ({country}) => {
    console.log(country);
   
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Indepent: {country.independent ? "Free": "Not Free"}</p>
            <p>Population: {country.population} </p>
        </div>
    );
};

export default Country;