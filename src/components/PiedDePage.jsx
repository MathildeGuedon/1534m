import styles from "../styles/Footer.module.css"
import pinterestIcone from "../assets/pinterest.png"
import instagramIcone from "../assets/instagram.png"
import facebookIcone from "../assets/facebook.png"

function PiedDePage({ setLegal }) {
    return (
        <div className={styles.glPiedDePageGlobal}>
            <div className={styles.glPiedDePageSection}>
                <h2>Menu</h2>
                <a href="#logoAccueil"><h3>Accueil</h3></a>
                <button className={styles.glPiedDePageBtnOpenLegal} onClick={() => setLegal(true)}><h3>Mentions légales</h3></button>
            </div>
            <div className={styles.glPiedDePageSection}>
                <h2>Coordonnées</h2>
                <p>Ferme du Colombier</p>
                <p>230, rue de la Mairie</p>
                <p>01350 ANGLEFORT</p>
                <p>✆ 04 55 55 55 55</p>
                <p>✉ contact@fermeducolombier.com</p>
            </div>
            <div className={styles.glPiedDePageSection}>
                <h2>Réseaux sociaux</h2>
                <a target="_blank" rel="noopener noreferrer external" href="https://pinterest.com/" ><abbr
                    title="Pinterest"><img className={styles.glIconeReseau} src={pinterestIcone} alt="Logo Pinterest" /></abbr></a>
                <a target="_blank" rel="noopener noreferrer external" href="https://www.instagram.com/"
                ><abbr title="Instagram"><img className={styles.glIconeReseau} src={instagramIcone}
                    alt="Logo Instagram" /></abbr></a>
                <a target="_blank" rel="noopener noreferrer external" href="https://facebook.com/" ><abbr
                    title="Facebook"><img className={styles.glIconeReseau} src={facebookIcone} alt="Logo Facebook" /></abbr></a>
            </div>
        </div>
    )
}

export default PiedDePage