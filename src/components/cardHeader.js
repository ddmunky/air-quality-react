import React from "react"
import Loading from "./loading"
import aqiWidgetInfo from "../helpers/air_quality"
import iconsWeather from "../helpers/iconsWeather"

const CardHeader = ({ loading, location, aqi, icon }) => {
  const { color } = aqiWidgetInfo(aqi)

  return (
    <div
      className="card__header"
      style={!loading ? { backgroundColor: `${color}` } : null}
    >
      <div className="card__title">
        <h6>Air Quality & Weather</h6>
        <h2 id="city">{loading ? Loading : location}</h2>
      </div>
      <div className="card__icon--weather">
        <span className="icon">
          {loading || icon.length === 0 ? (
            <i className="wi wi-cloud-refresh"></i>
          ) : (
            <i className={`wi ${iconsWeather["_" + icon]}`}></i>
          )}
        </span>
      </div>
    </div>
  )
}

export default CardHeader
