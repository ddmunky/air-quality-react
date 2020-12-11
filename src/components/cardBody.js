import React from "react"
import Loading from "./loading"
import aqiWidgetInfo from "../helpers/air_quality"

const CardBody = ({ loading, aqi }) => {
  const { message, color } = aqiWidgetInfo(aqi)
  const widthValue = (aqi / 500) * 100

  return (
    <div className="card__body">
      <div className="progress-container">
        <span className="progress-text">Air Quality Index</span>
        <div className="progress">
          <span
            className="progress-fill"
            style={{ backgroundColor: `${color}`, width: `${widthValue}%` }}
          ></span>
        </div>
        <span className="progress-text progress-text--important">
          <span id="aqi" style={{ color: `${color}` }}>
            {aqi}
          </span>
          /500
        </span>
      </div>
      <div className="card__body--description">
        <h6 id="date">{new Date().toLocaleDateString()}</h6>
        <h3>General information</h3>
        <p id="details">{loading ? Loading : message}</p>
      </div>
    </div>
  )
}

export default CardBody
