import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../components/Layout.css"

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
