import React, { useContext, useEffect, useState, useRef } from "react"
import { GoSearch } from "react-icons/go"
import { IoCloseCircleOutline } from "react-icons/io5"
import Loading from "./loading"
import { UserCity } from "../pages/index"
import { getCode } from "country-list"
import { useCallback } from "react"
const API_KEY_PLACES = process.env.GATSBY_API_KEY_PLACES

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [results, setResults] = useState([])
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const { updateCityCoords } = useContext(UserCity)
  const textInput = useRef(null)
  const cors = "https://ddmunky-cors-anywhere.herokuapp.com/"

  const handleSearch = e => {
    setInput(e.target.value)
    setClicked(false)
  }

  const handleError = function (err) {
    console.warn(err)
    return new Response(
      JSON.stringify({
        code: 400,
        message: "Oops network Error",
      })
    )
  }

  const fetchGPSCoordinates = useCallback(() => {
    const gpsData = async () => {
      const response = await (
        await fetch(
          `${cors}https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            city
          )}&region=${
            country.lenght > 3 ? getCode(country) : country
          }&key=${API_KEY_PLACES}`
        ).catch(handleError)
      ).json()
      // check for error
      if (response.code && response.code === 400) return
      // update context
      await updateCityCoords(response.results[0].geometry.location)
    }
    gpsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, country])

  const fetchPlaces = useCallback(() => {
    setLoading(true)
    const fetchData = async () => {
      const response = await (
        await fetch(
          `${cors}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&language=en&key=${API_KEY_PLACES}`
        ).catch(handleError)
      ).json()
      // check for error
      if (response.code && response.code === 400) return
      // update states
      setResults(response.predictions)
      setShowAutocomplete(true)
      setLoading(false)
    }
    fetchData()
  }, [input])

  useEffect(() => {
    if (city.length > 0 && country.length > 0) {
      fetchGPSCoordinates()
    }
  }, [city, country, fetchGPSCoordinates])

  useEffect(() => {
    if (input.length > 3) {
      fetchPlaces()
    } else {
      setShowAutocomplete(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  // jsx part
  return (
    <div className="search__wrapper">
      <div
        className={
          !isOpen ? "search__field" : "search__field search__field-active"
        }
      >
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleSearch}
          value={input}
          ref={textInput}
        />
        {loading ? <span>{Loading}</span> : null}
      </div>
      <div
        className={
          !isOpen ? "autocomplete" : "autocomplete autocomplete-active"
        }
      >
        {showAutocomplete && isOpen && !clicked ? (
          <ul>
            {results.length > 0
              ? results.map(result => (
                  <li
                    key={result.place_id}
                    aria-hidden="true"
                    onClick={() => {
                      setInput(result.structured_formatting.main_text)
                      setCity(result.structured_formatting.main_text)
                      setCountry(result.terms.slice(-1)[0].value)
                      setShowAutocomplete(false)
                      setClicked(true)
                      setInput("")
                      setIsOpen(false)
                    }}
                  >
                    {result.description}
                  </li>
                ))
              : null}
          </ul>
        ) : null}
      </div>
      <div className="search__icon">
        {!isOpen ? (
          <GoSearch
            onClick={() => {
              setIsOpen(!isOpen)
              textInput.current.focus()
            }}
            className="search-white"
          />
        ) : (
          <IoCloseCircleOutline onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
    </div>
  )
}

export default Search
