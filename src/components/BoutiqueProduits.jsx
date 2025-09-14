import GlaceItem from "./GlaceItem"
import { listeGlaces } from "../datas/listeGlaces"
import styles from "../styles/BoutiqueProduits.module.css"
import VoletSelection from "./VoletSelection"
import { useState } from "react"

function BoutiqueProduits({ cart, setCart }) {

    const [activeClassement, setActiveClassement] = useState("");
    const [activeGamme, setActiveGamme] = useState("");
    const [activeSelectNumber, setActiveSelectNumber] = useState("");
    const [filters, setFilters] = useState({
        enSoldes: false,
        meilleuresVentes: false,
        enStock: false,
        nouveaute: false
    });
    const [allergenes, setAllergenes] = useState({
        sansLait: false,
        sansOeuf: false,
        sansNoix: false
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
    };


    let nouvelleListeGlaces = trierPar({ activeClassement });

    function addToCart(name, prix, enStock) {
        if (!enStock) {
            return
        }
        const currentGlaceSaved = cart.find((glace) => glace.name === name);
        if (currentGlaceSaved) {
            const cartFilteredCurrentGlace = cart.filter((glace) => glace.name !== name);
            setCart([
                ...cartFilteredCurrentGlace,
                { name, prix, amount: currentGlaceSaved.amount + 1 }
            ])
        } else {
            setCart([...cart, { name, prix, amount: 1 }]);
        }
    }

    function minusToCart(name, prix) {
        const currentGlaceSaved = cart.find((glace) => glace.name === name);
        if (currentGlaceSaved) {
            const cartFilteredCurrentGlace = cart.filter((glace) => glace.name !== name);
            if (currentGlaceSaved.amount === 1) {
                setCart([...cartFilteredCurrentGlace]);
            } else {
                setCart([...cartFilteredCurrentGlace, { name, prix, amount: currentGlaceSaved.amount - 1 }]);
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
                allergenes={allergenes}
                setAllergenes={setAllergenes}
            />
            <ul className={styles.glBoutiqueListe}>
                {nouvelleListeGlaces.filter(glace => {
                    if (!filters.enSoldes && !filters.meilleuresVentes && !filters.enStock && !filters.nouveaute) {
                        return true;
                    }
                    return (
                        (!filters.enSoldes || glace.enSoldes) &&
                        (!filters.meilleuresVentes || glace.meilleuresVentes) &&
                        (!filters.enStock || glace.enStock) &&
                        (!filters.nouveaute || glace.nouveaute)
                    );
                })
                    .filter(glace => {
                        if (!allergenes.sansLait && !allergenes.sansOeuf && !allergenes.sansNoix) {
                            return true;
                        }
                        return (
                            (!allergenes.sansLait || glace.sansLait) &&
                            (!allergenes.sansOeuf || glace.sansOeuf) &&
                            (!allergenes.sansNoix || glace.sansNoix)
                        );
                    })
                    .map(({ name, id, cover, categorie, gamme, ingredients, volume, prix, enSoldes, meilleuresVentes, enStock, nouveaute }) => (
                        (!activeGamme || activeGamme === gamme) &&
                            (!activeSelectNumber || activeSelectNumber >= prix) ? (
                            <div key={id} className={styles.glBoutiqueItem}>
                                <GlaceItem
                                    name={name}
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
                                <div className={styles.glBoutiqueBtnCommandePanier}>
                                    <abbr title="ajouter au panier" className={styles.glBoutiqueBtnPlus}><button onClick={() => addToCart(name, prix, enStock)}>+</button></abbr>
                                    <abbr title="retirer du panier" className={styles.glBoutiqueBtnMoins}><button onClick={() => minusToCart(name, prix)}>-</button></abbr>
                                </div>
                            </div>) : null
                    ))
                }
            </ul >
        </div >)
}

export default BoutiqueProduits