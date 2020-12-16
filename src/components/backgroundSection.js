import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={imageData}
    ></BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed !important;
`

export default StyledBackgroundSection
