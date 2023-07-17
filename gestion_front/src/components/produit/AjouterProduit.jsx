import { useState } from "react";
import Button from "../UI/Button";
import AjouterProduitForm from "./AjouterProduitForm";

const createEndpoint = "/api/produits";

function AjouterProduit() {
    const [isUnfolded, setIsUnfolded] = useState(false);

    function onFold() {
        setIsUnfolded(true);
    }

    function onUnfold() {
        setIsUnfolded(false);
    }

    async function soumettreProduit(produit) {
        const response = await fetch(
            createEndpoint,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produit)
            }
        )
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return response.status === 201;
    }

    async function onFormSubmited(produit) {
        return await soumettreProduit(produit);
    }

    return (
        <>
            {!isUnfolded && 
                <Button onClick={onFold}>Ajouter Produit</Button>}
            {isUnfolded && 
                <AjouterProduitForm 
                    onCancel={onUnfold}
                    onSubmit={onFormSubmited}
                />}
        </>
    );
}

export default AjouterProduit;
