import styles from "../styles/Footer.module.css"

function Engagement({ icone, promesse }) {
    return (
        <div className={styles.glEngagement}>
            <p>{icone}</p>
            <h3>{promesse}</h3>
        </div>
    )
}

export default Engagement