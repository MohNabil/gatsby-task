import React from "react"
import image from "../../images/logo.png"
import styles from "./Header.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Link to="/">
          <img src={image} alt="logo image" />
        </Link>
      </div>
      <div className={styles.module}>
        <FontAwesomeIcon icon={faHome} />
        <Link to="/RealState" className={styles.moduleTitle}>
          Real State
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/PostForm" className={styles.link}>
          Post Free Ad
        </Link>
      </nav>
    </header>
  )
}
