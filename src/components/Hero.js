import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const GbiBridged = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "karl-wienhold.JPG" }) {
          childImageSharp {
            gatsbyImageData(width: 1800)
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      className="heroImage"
    >
      <div className="heroText">
        <h1>KARL WIENHOLD</h1>
        <h2>PhD Economic Development</h2>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div
        style={{
          minHeight: 640,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </BackgroundImage>
  )
}

export default GbiBridged
