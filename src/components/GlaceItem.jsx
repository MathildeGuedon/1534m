import styles from '../styles/GlaceItem.module.css'

function GlaceItem({ name, id, cover, categorie, gamme, ingredients, volume, prix, enSoldes, meilleuresVentes, enStock, nouveaute }) {
    return (
        <li key={id} className={styles.glGlaceItem}>
            <div className={styles.glGlaceTag}>
                <img className={styles.glGlaceItemCover} src={cover} alt={`${name}`} />
                {enSoldes && <div className={styles.glGlaceItemSoldes}>SOLDES</div>}
                {nouveaute && <div className={styles.glGlaceItemNouveaute}>NOUVEAU</div>}
                <div className={styles.glGlaceItemPrix}>{prix}€</div>
                {!enStock ? <span className={styles.glGlaceItemStock}>Rupture de stock</span> : null}
            </div>
            <div>
                {meilleuresVentes ? <span><abbr title="Coup de coeur">🧡</abbr></span> : null}
                {name}
                {/* <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} /> */}
            </div>
        </li>
    )
}

export default GlaceItem