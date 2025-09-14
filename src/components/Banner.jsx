import styles from "../styles/Banner.module.css"
import logo from "../assets/Logo-1534m.png"

function Banner() {
    return (
        <div className={styles.glBannerGlobal}>
            <div className={styles.glLogoAccueil}>
                <img className={styles.glLogo} src={logo} id="logoAccueil" alt="logo 1534 mètres" />
                <h1>1534m</h1>
            </div>
            <h2><em>Des Glaces au Sommet</em></h2>
        </div>
    )
}

export default Banner