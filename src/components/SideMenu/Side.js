import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import styles from "./Side.module.scss"

export const Side = () => {
  return (
    <aside className={styles.side}>
      <div className={styles.module}>
        <FontAwesomeIcon icon={faHome} />
        <Link to="/RealState" className={styles.moduleTitle}>
          Real State
        </Link>
      </div>
    </aside>
  )
}
