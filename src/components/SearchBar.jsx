import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
  
  const [city, setCity] = useState('');

  function handleChange(event)
  {
    setCity(event.target.value)    
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    props.setCityName(city);
    setCity('');
  }

  function handleUnits()
  {
    props.setUnits(prev => {
      if(prev == "imperial")
      {
        return "metric";
      }
      else
      {
        return "imperial";
      }
    });
  }

  return (
    <div className='parent'>
      <div>
        <button className='button button2' onClick={handleUnits}>F | C</button>
      </div>
      <form action="submit">
        <div className='SearchBar'>
          <input type="text" name="cityName" onChange={handleChange} value={city} placeholder='enter city name'/>
          <button className='button' onClick={handleSubmit}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar