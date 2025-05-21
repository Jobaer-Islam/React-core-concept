import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'
const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log("country visited clicked to be added", country);

    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries = {handleVisitedCountries}
                        country={country}></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;