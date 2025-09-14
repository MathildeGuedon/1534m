import styles from "../styles/MentionsLegales.module.css"

function MentionsLegales({ setLegal }) {
    return (
        <div className={styles.glLegalGlobal}>
            <button className={styles.glLegalBtnFermeture} onClick={() => setLegal(false)}><span className="material-symbols-rounded">
                close
            </span></button>
            <h2>Mentions légales</h2>
            <section className={styles.glLegalCorps}>
                <p>Ce site est édité par le GAEC du Grand Colombier, au capital de 50 000 euros dont le siège social est
                    situé au 230, rue de la Mairie 01350 ANGLEFORT. tel : 04 55 55 55 55.
                    Siret : 555 555 555 00055</p><br />
                <p>Directeur de la publication : Monsieur François Fournier - Contact : contact@fermeducolombier.com</p><br />
                <p>Le site Internet <a href="#logoAccueil">https://glacier1534m.com</a> (nommé ci-après le Site) est la
                    propriété exclusive du GAEC du Grand Colombier.</p>
                <h3>Hébergement</h3>
                <p>Ce Site est hébergé par la société o5switch, 555 Boulevard Gustave Flaubert 63000 Clermont-Ferrand,
                    Capital de 100000 euros, Siret : 510 555 555 00024</p>
                <h3>Crédits photographiques</h3>
                <p>
                    Merci aux talentueux photographes et auteurs du site <a href="https://fr.freepik.com" target="_blank">Freepik.com</a> ainsi
                    que <a href="https://www.canva.com/p/kulokale/" target="_blank">Kulokale</a> qui ont permis d'illustrer le site.
                </p>
                <h3>Utilisation des données personnelles</h3>
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), nous vous informons que des
                    données personnelles sont susceptibles d'être collectées sur ce site :</p>
                <ul>
                    <li>Inscription à la newsletter : adresse e-mail. Cette information est
                        nécessaire pour vous envoyer notre lettre d'information et peut être utilisée à des fins commerciales.
                        Elle est conservée pendant toute la durée de votre inscription. </li>
                    <li>commande : nom, prénom, adresse et référence de la commande. Ces informations sont
                        nécessaires pour traiter la commande et vous la faire parvenir.</li>
                </ul><br />
                <p>Les données ne sont transmises à aucun tiers</p>
                <p>Conformément aux articles 15 à 22 du RGPD, vous pouvez demander à consulter, rectifier ou supprimer vos
                    données personnelles à tout moment en nous contactant à l'adresse suivante :
                    contact@fermeducolombier.com</p>
                <h3>Cookies</h3>
                <p>Le site utilise uniquement des cookies strictement nécessaires au fonctionnement du site, sans suivi
                    publicitaire ou de profilage.</p>
                <p>Aucun cookie tiers n'est actuellement utilisé.</p>
                <h3>Modifications</h3>
                <p>Ces mentions légales peuvent être modifiées à tout moment, notamment en cas de mise en ligne effective du
                    site ou de changement de traitement des données.</p>
            </section>
        </div>
    )
}

export default MentionsLegales