import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

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
    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      <div className="heroImage">
        <GatsbyImage image={image} alt={"karl-wienhold"} />
        <h1>KARL WIENHOLD</h1>
      </div>
    </BackgroundImage>
  )
}

export default GbiBridged
