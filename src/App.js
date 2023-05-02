import { useState, useEffect } from 'react';
import './App.css';
import ErrorMsg from './components/ErrorMsg';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TemperatureInfo from './components/TemperatureInfo';
import WeatherInfo from './components/WeatherInfo';

const red = {
  backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% )"
}

const blue = {
  backgroundImage: "radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% )"
}

function App() {

  const [cityName, setCityName] = useState('montgomery');
  const [errorMsg, setErrorMsg] = useState();
  const [apiData, setApiData] = useState();
  const [units, setUnits] = useState("imperial");
  const [bg, setBg] = useState(true);

  const API_KEY = '14242d0cd05cac53f2fce73f3175445d';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`;

  useEffect(() => {

    const fetchData = async () => {
      try
      {
        const response = await fetch(API_URL);
        const data = await response.json();

        if(response.ok)
        {
          setErrorMsg(true);
          setApiData(data);

        units == "imperial" ? data.main.temp <= 71 ? setBg(true) : setBg(false) :data.main.temp <= 23 ? setBg(true) : setBg(false);

        }
        else
        {
          setErrorMsg(false);
        }
      } 
      catch (err)
      {
        setErrorMsg(false);
      }
    }
    fetchData();
  }, [cityName, units])

  return (
    <div className="App" style={bg ? blue : red}>
      <Header/>
     <SearchBar setCityName={setCityName} setUnits={setUnits} units={units}/>
     { errorMsg ? <TemperatureInfo data={apiData} units={units}/> : cityName == '' ? "" : <ErrorMsg/>}
     { errorMsg && <WeatherInfo data={apiData} units={units}/>}
     <Footer/> 
    </div>
  );
}

export default App;
