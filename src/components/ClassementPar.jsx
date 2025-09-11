import '../styles/Categories.module.css'

function ClassementPar({ activeClassement, setActiveClassement, classements, legendeClassement }) {
    return (
        <div className='lmj-classement'>{legendeClassement}<br />
            <select
                value={activeClassement}
                onChange={(e) => setActiveClassement(e.target.value)}
                className='lmj-classement-select'
            >
                <option value=''></option>
                {classements.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveClassement('')}>Réinitialiser</button>
        </div>
    )
}

export default ClassementPar