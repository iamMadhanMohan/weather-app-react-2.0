import React from 'react'
import './WeatherInfo.css';
import InfoTemplate from './InfoTemplate';
import timeConverter from '../time';

const WeatherInfo = ({data, units}) => {
  return (
    <div className='WeatherInfo'>
      <InfoTemplate name ='sun-rise' value = {timeConverter(data.sys.sunrise) + 'am'}/>
      <InfoTemplate name ='sun-set' value = {timeConverter(data.sys.sunset) + 'pm'}/>
      <InfoTemplate name ='humidity' value = {data.main.humidity + '%'} />
      <InfoTemplate name ='min-temp' value = {data.main.temp_min + (units == "imperial" ? "°F" : "°C")}/>
      <InfoTemplate name ='max-temp' value = {data.main.temp_max + (units == "imperial" ? "°F" : "°C")}/>
      <InfoTemplate name ='wind-speed' value = {data.wind.speed + (units == "imperial" ? " miles/hr" : " mtr/sec")}/>
    </div>
  )
}

export default WeatherInfo