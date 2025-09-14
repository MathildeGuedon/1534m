import { useState } from "react"
import { listeGlaces } from "../datas/listeGlaces"
import Gamme from "./Gamme"
import styles from "../styles/Categories.module.css"
import SelectionNumber from "./SelectionNumber"
import ClassementPar from "./ClassementPar"
import ChoixMultiple from "./ChoixMultiple"

function VoletSelection({
    activeClassement,
    setActiveClassement,
    activeGamme,
    setActiveGamme,
    activeSelectNumber,
    setActiveSelectNumber,
    filters,
    setFilters,
    allergenes,
    setAllergenes
}) {
    const [voletOuvert, setVoletOuvert] = useState(false);

    const classements = ["ordre alphabétique", "prix croissants", "prix décroissants"];
    const legendeClassement = "Trier par";

    const gammes = listeGlaces.reduce(
        (acc, glace) =>
            acc.includes(glace.gamme) ? acc : acc.concat(glace.gamme),
        []
    );
    const legendeGamme = "";

    const maxNumber = listeGlaces.reduce(
        (max, glace) => max >= glace.prix ? max : glace.prix, 0
    );
    const minNumber = listeGlaces.reduce(
        (min, glace) => min <= glace.prix ? min : glace.prix, 10
    );

    const filterOptions = [
        { name: 'enSoldes', label: 'Promotion' },
        { name: 'meilleuresVentes', label: 'Coup de coeur' },
        { name: 'enStock', label: 'En stock' },
        { name: 'nouveaute', label: 'Nouveauté' },
    ];

    const allergenesOptions = [
        { name: 'sansLait', label: 'sans produits laitiers' },
        { name: 'sansOeuf', label: 'sans oeuf' },
        { name: 'sansNoix', label: 'sans fruits à coques' },
    ];

    return voletOuvert ? (
        <div className={styles.glVoletSelectionOuvert}>
            <button className={styles.glVoletSelectionBtnFermeture} onClick={() => setVoletOuvert(false)}><span className="material-symbols-rounded">
                close
            </span></button>
            <div>
                <h2>Filtres</h2>
                <button className={styles.btnVoletSelectionReinitGal}
                    onClick={() => {
                        setActiveClassement("");
                        setActiveGamme("");
                        setActiveSelectNumber("");
                        setFilters({ enSoldes: false, meilleursVentes: false, enStock: false, nouveaute: false });
                        setAllergenes({ sansLait: false, sansOeuf: false, sansNoix: false });
                    }}
                >
                    Réinitialiser tous les filtres
                </button>
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
                <ChoixMultiple
                    filters={allergenes}
                    setFilters={setAllergenes}
                    legende="Allergènes"
                    filterOptions={allergenesOptions}
                />
            </div>
        </div>
    ) : (
        <div>
            <button
                className={styles.glVoletSelectionBtnOuverture}
                onClick={() => setVoletOuvert(true)}
            >FILTRES</button>
        </div>
    )
}

export default VoletSelection