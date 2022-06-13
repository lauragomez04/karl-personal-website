import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhatImHereFor from "../components/WhatImHereFor"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatImHereFor />
      <Projects />
    </Layout>
  )
}
