import React from 'react'
import styles from "./DarkModeToggle.css"
const DarkModeToggle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball}></div>
    </div>
  )
}

export default DarkModeToggle
