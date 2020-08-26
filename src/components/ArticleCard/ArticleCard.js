import React from "react"
import styles from "./ArticleCard.module.scss"

export const ArticleCard = ({ image, title, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={image} className={styles.image} />
        <div className={styles.detailContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.details}>{details}</p>
        </div>
      </div>
    </div>
  )
}
