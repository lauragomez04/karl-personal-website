import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhatImHereFor from "../components/WhatImHereFor"
import Projects from "../components/Projects"
import MyContent from "../components/MyContent"
import WhatImOpenTo from "../components/WhatImOpenTo"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatImHereFor />
      <Projects />
      <MyContent />
      <WhatImOpenTo />
      <Contact />
    </Layout>
  )
}
