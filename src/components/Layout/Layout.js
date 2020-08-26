import React from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
// import { Side } from "../SideMenu/Side"
import styles from "./Layout.module.scss"

export const Layout = props => {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        {/* <Side /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
