import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Search from "../components/search"
import { useState } from "react"

export const UserCity = React.createContext()

const IndexPage = () => {
  const [userCityCoords, setUserCityCoords] = useState()

  const updateCityCoords = city => {
    setUserCityCoords(city)
  }

  return (
    <Layout>
      <SEO title="Air Quality" />
      <UserCity.Provider value={{ userCityCoords, updateCityCoords }}>
        <Search />
        <Card />
      </UserCity.Provider>
    </Layout>
  )
}

export default IndexPage
