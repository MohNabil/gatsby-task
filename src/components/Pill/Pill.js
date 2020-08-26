import React from "react"
import styles from "./Pill.module.scss"

export const Pill = ({ text }) => {
  return (
    <div className={styles.container} tabIndex="1">
      <p>{text}</p>
    </div>
  )
}
