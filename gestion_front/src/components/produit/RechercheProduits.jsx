import { useState } from "react";

function RechercheProduits({ onSubmit }) {
    const [recherche, setRecherche] = useState("");

    function onRechercheChanged(event) {
        setRecherche(event.target.value);
    }

    function onFormSubmited(event) {
        event.preventDefault();
        onSubmit && onSubmit(recherche);
    }

    return (
        <form onSubmit={onFormSubmited}>
            <input 
                type="text" 
                placeholder="Recherche"
                onChange={onRechercheChanged}
                value={recherche}
            />
            <button type="submit">Recherche</button>
        </form>
    );
}

export default RechercheProduits;
