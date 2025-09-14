import { useState } from "react"
import styles from "../styles/Footer.module.css"

function InscriptionNewsletter() {
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const regex = /^[a-zA-Z0-9@._-]*$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
        }
    }

    function handleBlur() {
        if (!inputValue.includes("@")) {
            alert("Cette adresse n'est pas valide");
        }
    }

    function handleClick() {
        if (!inputValue.includes("@")) {
            alert("Entrez une adresse valide, svp");
        } else if (inputValue !== "") { alert("Bienvenue dans notre communauté!") }
    }

    return (
        <div>
            <hr />
            <h2>
                Restons en contact
            </h2>
            <p>Recevez notre newsletter :</p>
            <input
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
            <button onClick={handleClick}>Je m'inscris</button>
            <hr />
        </div>
    )
}

export default InscriptionNewsletter