import React from "react"
import Loading from "./loading"
import aqiWidgetInfo from "../helpers/air_quality"

const CardHeader = ({ loading, location, aqi }) => {
  const { color } = aqiWidgetInfo(aqi)

  return (
    <div className="card__header" style={{ backgroundColor: `${color}` }}>
      <div className="card__title">
        <h6>Air Quality & Weather</h6>
        <h2 id="city">{loading ? Loading : location}</h2>
      </div>
      <div className="card__icon--weather">
        <span className="icon">
          <i className="wi wi-cloud-refresh"></i>
        </span>
      </div>
    </div>
  )
}

export default CardHeader
