import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhatImHereFor from "../components/WhatImHereFor"
import Projects from "../components/Projects"
import MyContent from "../components/MyContent"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatImHereFor />
      <Projects />
      <MyContent />
    </Layout>
  )
}
