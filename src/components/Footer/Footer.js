import React from "react"
import image from "../../images/logo.png"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={image} alt="logo" className={styles.image} />
      <p>Luxemburg Expats © 2019</p>
    </footer>
  )
}
