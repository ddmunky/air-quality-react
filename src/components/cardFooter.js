import React from "react"

const CardFooter = () => {
  return (
    <div className="card__footer">
      <div className="weather-details">
        <span className="icon--detail">
          <i className="wi wi-thermometer"></i>
        </span>
        <div className="icon--text">
          Temperature: <span id="temp"></span>º
        </div>
      </div>
      <div className="weather-details">
        <span className="icon--detail">
          <i className="wi wi-humidity"></i>
        </span>
        <div className="icon--text">
          Humidity: <span id="humidity"></span>%
        </div>
      </div>
      <div className="weather-details">
        <span className="icon--detail">
          <i className="wi wi-wind-direction"></i>
        </span>
        <div className="icon--text">
          Wind: <span id="wind"></span>m/s
        </div>
      </div>
    </div>
  )
}

export default CardFooter
