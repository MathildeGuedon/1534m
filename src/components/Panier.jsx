import { useState, useEffect } from "react"
import styles from "../styles/Panier.module.css"
import { francoPort } from "../datas/constantes"

function Panier({ cart, setCart }) {
    const [isOpen, setIsOpen] = useState(false);
    let fraisDePort;
    let total = cart.reduce(
        (acc, glacePanier) => acc + glacePanier.amount * glacePanier.prix,
        0
    );
    if (total >= francoPort || total === 0) {
        fraisDePort = 0;
    } else {
        fraisDePort = 8;
    }
    let resteToFranco = francoPort - total;
    total += fraisDePort;

    useEffect(() => {
        document.title = `1534m : ${total}€ de fraicheur ❄️`
    },
        [total, fraisDePort]);

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
                        {fraisDePort === 0 ? (<p>Livraison gratuite</p>) : (<p>Plus que {resteToFranco}€ pour bénéficier de la livraison gratuite</p>)}
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