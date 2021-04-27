import React from 'react';
import SearchField from '../../search-field/search-field.component'
import Forecast from '../../forecast/forecast.component';

const WeatherDetails = () => (
    <div>
        <h1>Weather Details</h1>
        <SearchField/>
        <Forecast/>
    </div>   
)

export default WeatherDetails