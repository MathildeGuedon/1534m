import '../styles/Categories.module.css'
import { useState } from 'react';

function SelectionNumber({ activeSelectNumber, setActiveSelectNumber, maxNumber, minNumber }) {
    const [hoverValue, setHoverValue] = useState("");
    return (
        < div className='lmj-catNumber' >
            <label for="prix">Prix max</label><br />
            <abbr title={hoverValue}>
                <span>{minNumber}€</span>
                <input className='lmj-catNumber-cursor'
                    id="prix"
                    name="prix"
                    type="range"
                    min={minNumber}
                    max={maxNumber}
                    step="1"
                    value={activeSelectNumber}
                    onChange={(e) => setActiveSelectNumber(e.target.value)}
                    onMouseOver={(e) => setHoverValue(e.target.value)} // Met à jour hoverValue au survol
                    onMouseLeave={() => setHoverValue(null)} // Cache la valeur quand la souris quitte le curseur
                >
                </input>
                <span>{maxNumber}€</span><br />
            </abbr>
            <button onClick={() => setActiveSelectNumber("")}>Réinitialiser</button>
        </div >
    )
}

export default SelectionNumber