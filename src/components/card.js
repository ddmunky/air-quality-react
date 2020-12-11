import React, { useEffect } from "react"
import { useState } from "react"
import CardBody from "./cardBody"
import CardFooter from "./cardFooter"
import CardHeader from "./cardHeader"
const API_KEY = process.env.GATSBY_API_KEY
const API_URL = process.env.GATSBY_API_URL

const Card = () => {
  const [airQuality, setAirQuality] = useState(null)
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
        const response = await fetch(
          `${API_URL}/nearest_city?key=${API_KEY}`,
          requestOptions
        )
        const responseData = await response.json()
        setAirQuality(responseData.data.current.pollution.aqius)
        setCity(responseData.data.city)
        setLoading(false)
      }

      fetchData()
    } catch (error) {
      console.log("Oops: ", error)
    }
  }, [])

  return (
    <div className="card">
      <CardHeader loading={loading} location={city} aqi={airQuality} />
      <CardBody loading={loading} aqi={airQuality} />
      <CardFooter />
    </div>
  )
}

export default Card
