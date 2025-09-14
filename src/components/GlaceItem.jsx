import styles from "../styles/GlaceItem.module.css"

function GlaceItem({ name, id, cover, categorie, gamme, ingredients, volume, prix, enSoldes, meilleuresVentes, enStock, nouveaute }) {
    let listeIngredients = "ingrédients : ";
    for (let i = 0; i < ingredients.length - 1; i++) {
        listeIngredients += `${ingredients[i]}, `;
    }
    listeIngredients += `${ingredients[ingredients.length - 1]}`;

    return (
        <li key={id} className={styles.glGlaceItem}>
            <div className={styles.glGlaceTag}>
                <img className={styles.glGlaceItemCover} src={cover} alt={`${name}`} />
                {enSoldes && <div className={styles.glGlaceItemSoldes}>SOLDES</div>}
                {nouveaute && <div className={styles.glGlaceItemNouveaute}>NOUVEAU</div>}
                {!enStock ? <span className={styles.glGlaceItemStock}>Rupture de stock</span> : null}
            </div>
            <div className={styles.glGlaceInfo}>
                <div className={styles.glGlaceInfoEmojiTitle}>
                    {meilleuresVentes ? <span><abbr title="Coup de coeur">❤︎</abbr></span> : null}
                    <abbr title={listeIngredients}>📜</abbr>
                    {name}
                </div>
                <div className={styles.glGlaceItemPrix}>{prix}€</div>
            </div>
        </li>
    )
}

export default GlaceItem