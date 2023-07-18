import { useState } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

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
        <Card>
            <form onSubmit={onFormSubmited}>
                <Input 
                    type="text" 
                    placeholder="Recherche"
                    onChange={onRechercheChanged}
                    value={recherche}
                />
                <Button type="submit">Recherche</Button>
            </form>
        </Card>
    );
}

export default RechercheProduits;
