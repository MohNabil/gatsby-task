import React from "react"
import { Layout } from "../components/Layout/Layout"
import image from "../images/appartment2.png"
export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1>Home screen</h1>
        <img src={image} />
      </div>
    </Layout>
  )
}
