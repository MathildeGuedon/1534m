import { useState } from "react";
import { listeGlaces } from "../datas/listeGlaces";
import Gamme from "./Gamme";
import styles from "../styles/Categories.module.css"
import SelectionNumber from "./SelectionNumber";
import ClassementPar from "./ClassementPar";
import ChoixMultiple from "./ChoixMultiple";

function VoletSelection({
    activeClassement,
    setActiveClassement,
    activeGamme,
    setActiveGamme,
    activeSelectNumber,
    setActiveSelectNumber,
    filters,
    setFilters
}) {
    const [voletOuvert, setVoletOuvert] = useState(false)

    const classements = ["ordre alphabétique", "prix croissants", "prix décroissants"]
    const legendeClassement = "Trier par"

    const gammes = listeGlaces.reduce(
        (acc, glace) =>
            acc.includes(glace.gamme) ? acc : acc.concat(glace.gamme),
        []
    )
    const legendeGamme = "Gamme"

    const maxNumber = listeGlaces.reduce(
        (max, glace) => max >= glace.prix ? max : glace.prix, 0
    )
    const minNumber = listeGlaces.reduce(
        (min, glace) => min <= glace.prix ? min : glace.prix, 10
    )

    const filterOptions = [
        { name: 'enSoldes', label: 'Promotion' },
        { name: 'meilleuresVentes', label: 'Coup de coeur' },
        { name: 'enStock', label: 'En stock' },
        { name: 'nouveaute', label: 'Nouveauté' },
    ]

    return voletOuvert ? (
        <div className={styles.glVoletSelectionOuvert}>
            <button className={styles.glVoletSelectionBtnFermeture} onClick={() => setVoletOuvert(false)}><span className="material-symbols-rounded">
                close
            </span></button>
            <div>
                <h2>Filtres</h2>
                <ClassementPar
                    activeClassement={activeClassement}
                    setActiveClassement={setActiveClassement}
                    classements={classements}
                    legendeClassement={legendeClassement}
                />
                <Gamme
                    activeGamme={activeGamme}
                    setActiveGamme={setActiveGamme}
                    gammes={gammes}
                    legendeGamme={legendeGamme}
                />
                <SelectionNumber
                    activeSelectNumber={activeSelectNumber}
                    setActiveSelectNumber={setActiveSelectNumber}
                    maxNumber={maxNumber}
                    minNumber={minNumber}
                />
                <ChoixMultiple
                    filters={filters}
                    setFilters={setFilters}
                    legende="Sélection"
                    filterOptions={filterOptions}
                />
            </div>
        </div>
    ) : (
        <div>
            <button
                className={styles.glVoletSelectionBtnOuverture}
                onClick={() => setVoletOuvert(true)}
            >Afficher les filtres</button>
        </div>
    )
}

export default VoletSelection