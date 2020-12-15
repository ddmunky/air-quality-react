const AIR_QUALITY = {
  error: {
    info: `Sorry, information couldn't be retrieved, try again later`,
    color: "rgba(131, 131, 131, 0.836)",
  },
  good: {
    info:
      "Air quality is satisfactory, and air pollution poses little or no risk.",
    color: "#00C853",
  },
  moderate: {
    info:
      "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
    color: "#FFD600",
  },
  unhealthySensitiveGroup: {
    info:
      "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
    color: "#FFAB00",
  },
  unhealthy: {
    info:
      "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
    color: "#FF6D00",
  },
  veryUnhealthy: {
    info: "Health alert: The risk of health effects is increased for everyone.",
    color: "#FF3D00",
  },
  hazardous: {
    info:
      "Health warning of emergency conditions: everyone is more likely to be affected.",
    color: "#BF360C",
  },
}

const aqiWidgetInfo = aqi => {
  let message = ""
  let color = ""

  switch (true) {
    case aqi > 0 && aqi <= 50:
      message = AIR_QUALITY.good.info
      color = AIR_QUALITY.good.color
      break
    case aqi >= 51 && aqi <= 100:
      message = AIR_QUALITY.moderate.info
      color = AIR_QUALITY.moderate.color
      break
    case aqi >= 101 && aqi <= 150:
      message = AIR_QUALITY.unhealthySensitiveGroup.info
      color = AIR_QUALITY.unhealthySensitiveGroup.color
      break
    case aqi >= 151 && aqi <= 200:
      message = AIR_QUALITY.unhealthy.info
      color = AIR_QUALITY.unhealthy.color
      break
    case aqi >= 201 && aqi <= 300:
      message = AIR_QUALITY.veryUnhealthy.info
      color = AIR_QUALITY.veryUnhealthy.color
      break
    case aqi >= 301:
      message = AIR_QUALITY.hazardous.info
      color = AIR_QUALITY.hazardous.color
      break
    default:
      message = AIR_QUALITY.error.info
      color = AIR_QUALITY.error.color
      break
  }

  return { message, color }
}

export default aqiWidgetInfo
