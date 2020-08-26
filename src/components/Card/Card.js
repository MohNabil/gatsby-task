import React from "react"
import styles from "./Card.module.scss"

export const Card = ({ image, price, description, area }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={image} className={styles.image} />
        <div className={styles.detailsContainer}>
          <p>{description}</p>
          <p>
            {price} - {area}
          </p>
        </div>
      </div>
    </div>
  )
}
