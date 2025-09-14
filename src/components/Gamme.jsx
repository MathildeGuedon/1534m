import styles from "../styles/Categories.module.css"

function Gamme({ activeGamme, setActiveGamme, gammes, legendeGamme }) {
    return (
        <div className={styles.glGammeGlobal}>
            <span>Gamme de produits</span><br />
            <select
                value={activeGamme}
                onChange={(e) => setActiveGamme(e.target.value)}
            >
                <option value="">{legendeGamme}</option>
                {gammes.map((gam) => (
                    <option key={gam} value={gam}>
                        {gam}
                    </option>
                ))}
            </select><br />
            <button onClick={() => setActiveGamme("")}>Réinitialiser</button>
        </div>
    )
}

export default Gamme