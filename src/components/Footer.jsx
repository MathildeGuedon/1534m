import styles from "../styles/Footer.module.css"
import InscriptionNewsletter from "./InscriptionNewsletter"
import Engagement from "./Engagement"
import PiedDePage from "./PiedDePage"
import { francoPort } from "../datas/constantes"

function Footer({ setLegal }) {
    return (
        <div>
            <div className={styles.glFooterEngagements}>
                <Engagement icone={"⛟"} promesse={`Livraison offerte à partir de ${francoPort}€`} />
                <Engagement icone={"𓃔"} promesse={"Lait entier de nos Abondances"} />
                <Engagement icone={"❄"} promesse={"Transport respectant la chaîne du froid"} />
            </div>
            <InscriptionNewsletter />
            <PiedDePage setLegal={setLegal} />
        </div>
    )
}

export default Footer