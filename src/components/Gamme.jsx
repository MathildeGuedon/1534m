import styles from '../styles/Categories.module.css'

function Gamme({ activeGamme, setActiveGamme, gammes, legendeGamme }) {
    return (
        <div className='lmj-categories'>
            <select
                value={activeGamme}
                onChange={(e) => setActiveGamme(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>{legendeGamme}</option>
                {gammes.map((gam) => (
                    <option key={gam} value={gam}>
                        {gam}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveGamme('')}>Réinitialiser</button>
        </div>
    )
}

export default Gamme