import styles from "../styles/Categories.module.css";

function ChoixMultiple({ filters, setFilters, legende, filterOptions }) {
    const handleChange = (e) => {
        const { name, checked } = e.target;
        const newFilters = { ...filters, [name]: checked };
        setFilters(newFilters);
    };

    const handleReset = () => {
        const resetFilters = {};
        filterOptions.forEach(option => {
            resetFilters[option.name] = false;
        });
        setFilters(resetFilters);
    };

    return (
        <div className={styles.glChoixMultipleGlobal}>
            <span>{legende}</span>
            <div className={styles.glChoixMultipleListe}>
                {filterOptions.map((option) => (
                    <label key={option.name}>
                        <input
                            type="checkbox"
                            name={option.name}
                            checked={filters[option.name] || false}
                            onChange={handleChange}
                        />
                        {option.label}
                        <br />
                    </label>
                ))}
            </div>
            <button className={styles.glChoixMultipleBtnReset} onClick={handleReset}>
                Réinitialiser
            </button>
        </div>
    );
}

export default ChoixMultiple;