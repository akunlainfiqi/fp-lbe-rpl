import {React, useState, useEffect} from 'react';
import axios from 'axios';

const Weathercard=() => {
    const apiKey = '13b8097c48246f2b8de0f1295fe3f773'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=surabaya&appid=${apiKey}`

    const [dataApi, setDataApi] = useState({})

    useEffect(() => {
        axios.get(apiUrl).then(res => {setDataApi(res.data)})
        }
    , [apiUrl]);
    
    const kelvinToCelcius = (k)=>{
        return(k-273.15).toFixed(2);
    }

    return(
        <div className="content-container">
            {dataApi.main ? (
            <div className="weather-container">
                <img src={`http://openweathermap.org/img/wn/${dataApi.weather[0].icon}@4x.png`} alt="foto" className="weather-icon"/>
                <div className="content-container">
                    <h2>{dataApi.name}</h2>
                    <h3>{dataApi.weather[0].main}</h3>
                    <div className="suhu-container">
                        <div>
                            <h4>Now</h4>
                            <h5>{kelvinToCelcius(dataApi.main.temp)}</h5>
                        </div>
                        <div>
                            <h4>Min</h4>
                            <h5>{kelvinToCelcius(dataApi.main.temp_min)}</h5>
                        </div>
                        <div>
                            <h4>Max</h4>
                            <h5>{kelvinToCelcius(dataApi.main.temp_max)}</h5>
                        </div>
                    </div>
                </div>
            </div>
            ):(
                <h1>Loading</h1>
            )}
        </div>
    )
}

export default Weathercard
