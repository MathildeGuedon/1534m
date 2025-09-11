import { useState, useEffect } from "react"
import styles from '../styles/Panier.module.css'

function Panier({ cart, setCart }) {
    const [isOpen, setIsOpen] = useState(false)
    const francoPort = 45
    let fraisDePort;
    let total = cart.reduce(
        (acc, glacePanier) => acc + glacePanier.amount * glacePanier.prix,
        0
    )
    if (total < francoPort) {
        fraisDePort = 8
    } else {
        fraisDePort = 0
    }
    total += fraisDePort

    useEffect(() => {
        document.title = `1534m : ${total}€ de douceurs 🍨`
    },
        [total, fraisDePort])

    return isOpen ? (
        <div className={styles.glPanierOpen}>
            <button className={styles.glPanierBtnFermeture} onClick={() => setIsOpen(false)}><span className="material-symbols-rounded">
                close
            </span></button>
            {cart.length > 0 ? (
                <div className={styles.glPanierRecap}>
                    <h2>Panier</h2>
                    <div className={styles.glPanierAddition}>
                        <ul>
                            {cart.map(({ name, prix, amount }, index) => (
                                <div key={`${name}-${index}`}>
                                    {name} : {amount} x {prix}€
                                </div>
                            ))}
                        </ul>
                        <p>Frais de port : {fraisDePort}€</p>
                        <h3>Total : {total}€</h3>
                    </div>
                    <button onClick={() => setCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div className={styles.glPanierRecap}>
                    <h2>Panier</h2>
                    <div>Votre panier est vide</div>
                </div>
            )}
        </div>
    ) : (
        <div className={styles.glPanierClosed}>
            <button
                className={styles.glPanierBtnOuverture}
                onClick={() => setIsOpen(true)}
            >
                <span className="material-symbols-outlined">
                    shopping_basket
                </span>
            </button>
        </div>
    )
}

export default Panier