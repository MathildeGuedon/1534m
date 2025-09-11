import { useState } from 'react';

function ChoixMultiple({ filters, setFilters, legende, filterOptions }) {
    // Utilise les filtres passés en props ou un objet vide par défaut
    const [localFilters, setLocalFilters] = useState(filters || {});

    // Met à jour les filtres locaux et parent
    const handleChange = (e) => {
        const { name, checked } = e.target;
        const newFilters = { ...localFilters, [name]: checked };
        setLocalFilters(newFilters);
        setFilters(newFilters); // Transmet les filtres au parent
    };

    return (
        <div className="lmj-choix-multiple">
            <span>{legende}</span>
            <div>
                {filterOptions.map((option) => (
                    <label key={option.name}>
                        <input
                            type="checkbox"
                            name={option.name}
                            checked={localFilters[option.name] || false}
                            onChange={handleChange}
                        />
                        {option.label}
                        <br />
                    </label>
                ))}
            </div>
        </div>
    );
}

export default ChoixMultiple;