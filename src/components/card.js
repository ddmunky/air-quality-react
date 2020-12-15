import React, { useEffect, useState, useContext, useCallback } from "react"
import { UserCity } from "../pages/index"

import CardBody from "./cardBody"
import CardFooter from "./cardFooter"
import CardHeader from "./cardHeader"

const API_KEY = process.env.GATSBY_API_KEY
const API_URL = process.env.GATSBY_API_URL

const Card = () => {
  const [airQuality, setAirQuality] = useState(null)
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({
    icon: "test",
    temp: "test",
    humidity: "test",
    wind: "test",
  })
  const [loading, setLoading] = useState(true)
  const { userCityCoords } = useContext(UserCity)

  let endpoint = `nearest_city?`
  if (userCityCoords !== undefined) {
    endpoint = `nearest_city?lat=${userCityCoords.lat}&lon=${userCityCoords.lng}&`
  }

  const getCityinfo = useCallback(() => {
    setLoading(true)

    const handleError = function (err) {
      console.warn(err)
      return new Response(
        JSON.stringify({
          code: 400,
          message: "Oops network Error",
        })
      )
    }

    const fetchData = async () => {
      // fetch options for AQI API
      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
      // calling endpoint
      const response = await (
        await fetch(
          `${API_URL}/${endpoint}key=${API_KEY}`,
          requestOptions
        ).catch(handleError)
      ).json()
      // check for error
      if (response.code && response.code === 400) {
        setAirQuality("")
        setWeather({
          icon: "",
          temp: "",
          humidity: "",
          wind: "",
        })
        setCity("Unavailable - try again later")
        setLoading(false)
        return
      } else {
        // update states with results from API
        setAirQuality(response.data.current.pollution.aqius)
        setWeather({
          icon: response.data.current.weather.ic,
          temp: response.data.current.weather.tp,
          humidity: response.data.current.weather.hu,
          wind: response.data.current.weather.ws,
        })
        setCity(response.data.city)
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint])

  useEffect(() => {
    getCityinfo()
  }, [getCityinfo])

  // jsx part
  return (
    <div className="card">
      <CardHeader
        loading={loading}
        location={city}
        aqi={airQuality}
        icon={weather.icon}
      />
      <CardBody loading={loading} aqi={airQuality} />
      <CardFooter weather={weather} />
    </div>
  )
}

export default Card
