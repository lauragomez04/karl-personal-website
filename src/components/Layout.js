import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"
import "@fontsource/montserrat"

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
