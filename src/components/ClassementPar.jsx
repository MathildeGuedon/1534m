import styles from "../styles/Categories.module.css"

function ClassementPar({ activeClassement, setActiveClassement, classements, legendeClassement }) {
    return (
        <div className={styles.glClassementGlobal}>{legendeClassement}<br />
            <select
                value={activeClassement}
                onChange={(e) => setActiveClassement(e.target.value)}
            >
                <option value=""></option>
                {classements.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveClassement("")}>Réinitialiser</button>
        </div>
    )
}

export default ClassementPar