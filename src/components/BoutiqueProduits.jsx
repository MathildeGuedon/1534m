import GlaceItem from "./GlaceItem"
import { listeGlaces } from '../datas/listeGlaces'
import styles from "../styles/BoutiqueProduits.module.css"
import VoletSelection from "./VoletSelection"
import { useState } from "react"

function BoutiqueProduits({ cart, setCart }) {

    const [activeClassement, setActiveClassement] = useState('')
    const [activeGamme, setActiveGamme] = useState("")
    const [activeSelectNumber, setActiveSelectNumber] = useState("")
    const [filters, setFilters] = useState({
        enSoldes: false,
        meilleuresVentes: false,
        enStock: false,
        nouveaute: false
    });

    function trierPar({ activeClassement }) {
        if (activeClassement === "") {
            return [...listeGlaces]
        }
        else if (activeClassement === "ordre alphabétique") {
            return [...listeGlaces].sort((a, b) => a.name.localeCompare(b.name));
        } else if (activeClassement === "prix croissants") {
            return [...listeGlaces].sort((a, b) => a.prix - b.prix);
        } else if (activeClassement === "prix décroissants") {
            return [...listeGlaces].sort((a, b) => b.prix - a.prix);
        }
    }


    let nouvelleListeGlaces = trierPar({ activeClassement })

    function addToCart(name, prix) {
        const currentGlaceSaved = cart.find((glace) => glace.name === name) //Parcourt le tableau cart pour trouver la première plante dont le name correspond au name passé en argument
        if (currentGlaceSaved) { //si la plante est déjà dans le tableau cart:
            const cartFilteredCurrentGlace = cart.filter(
                (glace) => glace.name !== name //création d'un nouveau tableau contenant toutes les plantes sauf celle qu'on veut mettre à jour
            )
            setCart([ //met à jour cart 
                ...cartFilteredCurrentGlace, //étale les plantes filtrées dans un nouveau tableau grâce au spread operator
                { name, prix, amount: currentGlaceSaved.amount + 1 } //on ajoute au tableau un nouvel objet pour la plante à actualiser avec le même name et price et la quantité incrémentée de 1
            ])
        } else { //si la plante n'est pas encore dans le tableau cart: on utilise le spread operator pour créer un nouveau cart identique au précédent et on ajoute un objet pour la nouvelle plante
            setCart([...cart, { name, prix, amount: 1 }])
        }
    }

    function minusToCart(name, prix) {
        const currentGlaceSaved = cart.find((glace) => glace.name === name) //Parcourt le tableau cart pour trouver la première plante dont le name correspond au name passé en argument
        if (currentGlaceSaved) { //si la plante est déjà dans le tableau cart:
            const cartFilteredCurrentGlace = cart.filter(
                (glace) => glace.name !== name //création d'un nouveau tableau contenant toutes les plantes sauf celle qu'on veut mettre à jour
            )
            if (currentGlaceSaved.amount === 1) {
                setCart([...cartFilteredCurrentGlace])
            } else {
                setCart([...cartFilteredCurrentGlace, { name, prix, amount: currentGlaceSaved.amount - 1 }])
            }
        }
    }

    return (
        <div>
            <VoletSelection
                activeClassement={activeClassement}
                setActiveClassement={setActiveClassement}
                activeGamme={activeGamme}
                setActiveGamme={setActiveGamme}
                activeSelectNumber={activeSelectNumber}
                setActiveSelectNumber={setActiveSelectNumber}
                filters={filters}
                setFilters={setFilters}
            />
            <ul className={styles.glBoutiqueListe}>
                {nouvelleListeGlaces.filter(glace => {
                    if (!filters.enSoldes && !filters.meilleuresVentes && !filters.enStock && !filters.nouveaute) {
                        return true;
                    }
                    // Sinon, on vérifie si la plante correspond aux filtres cochés
                    return (
                        (!filters.enSoldes || glace.enSoldes) &&
                        (!filters.meilleuresVentes || glace.meilleuresVentes) &&
                        (!filters.enStock || glace.enStock) &&
                        (!filters.nouveaute || glace.nouveaute)
                    );
                })
                    .map(({ name, id, cover, categorie, gamme, ingredients, volume, prix, enSoldes, meilleuresVentes, enStock, nouveaute }) => (
                        (!activeGamme || activeGamme === gamme) &&
                            (!activeSelectNumber || activeSelectNumber >= prix) ? (
                            <div key={id}>
                                <GlaceItem
                                    name={name}
                                    // key={id}
                                    cover={cover}
                                    categorie={categorie}
                                    gamme={gamme}
                                    ingredients={ingredients}
                                    volume={volume}
                                    prix={prix}
                                    enSoldes={enSoldes}
                                    meilleuresVentes={meilleuresVentes}
                                    enStock={enStock}
                                    nouveaute={nouveaute}
                                />
                                <button onClick={() => addToCart(name, prix)}>+</button>
                                <button onClick={() => minusToCart(name, prix)}>-</button>
                            </div>) : null
                    ))}
            </ul >
        </div >)
}

export default BoutiqueProduits