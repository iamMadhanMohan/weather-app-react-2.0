import React from 'react'
import './TemperatureInfo.css';
import dateConverter from '../date'

const TemperatureInfo = ({data, units}) => {

  return (
    <div className='TemperatureInfo'>
      <div className="temperature">
        <p>{data.main.temp}&deg; {units == "imperial" ? "F" : "C"}</p>
        <p>{data.weather[0].description}</p>
      </div>

      <div className="city">
        <p>{data.name}, {data.sys.country}</p>
        <p>{dateConverter(data.dt)}</p>
      </div>
      
    </div>
  )
}

export default TemperatureInfo


