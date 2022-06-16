import React, { useState } from "react"
import imgCard from "../image/Nike.jpg"
import styles from "./Main.module.css"
import Description from "../Description/Description"

function Main() {
  const infoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit!"

  const [getModal, setModal] = useState(false)

  return (
    <>
      <div className="cards">
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={imgCard} alt="" />
          </div>

          <div className={styles.cardInfo}>
            {getModal === true && (
              <>
                <div className={styles.infoText}>
                  <span onClick={(e) => setModal(false)}>✖</span>
                  {infoText}
                </div>
              </>
            )}
            <div className={styles.cardDetails}>
              <div className={styles.cardName}>
                <p>Nike Sneakers</p>
                <p>$120</p>
              </div>
              <div className={styles.cardDetailBut}>
                <button onClick={(e) => setModal(true)}>Детали</button>
              </div>
            </div>
            <Description infoText={infoText} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
