import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProjectsImages() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "projects" }
          }
        ) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      {data.allFile.edges.map((image, index) => {
        return (
          <div key={index}>
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          </div>
        )
      })}
    </div>
  )
}
