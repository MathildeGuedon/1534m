import React from "react"
import styles from '../styles/Banner.module.css'

function Banner() {
    return (
        <div className={styles.glBannerGlobal}>
            <div className={styles.glLogoAccueil}>
                <div className={styles.glLogo}></div>
                <h1>1534m</h1>
            </div>
            <h2>Des Glaces au Sommet</h2>
        </div>
    )
}

export default Banner