import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"
import "@fontsource/montserrat"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
