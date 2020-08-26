import React from "react"
import styles from "./Input.module.scss"

export const Input = ({ inputType, typeAttr, label, optionValue, single }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      {inputType === "input" ? (
        <input
          type={typeAttr}
          className={!single ? styles.input : styles.singleInput}
        />
      ) : inputType === "textarea" ? (
        <textarea className={styles.textarea} />
      ) : (
        <select className={styles.select}>
          {optionValue.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
