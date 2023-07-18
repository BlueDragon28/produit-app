import { useState } from "react";
import Button from "../UI/Button";
import ProduitForm from "./ProduitForm";
import Card from "../UI/Card";

const createEndpoint = "/api/produits";

function AjouterProduit({ onProduitCreated }) {
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
        const result = await soumettreProduit(produit);
        result && onProduitCreated();
        return result;
    }

    return (
        <Card>
            {!isUnfolded && 
                <Button onClick={onFold}>Ajouter Produit</Button>}
            {isUnfolded && 
                <ProduitForm 
                    onCancel={onUnfold}
                    onSubmit={onFormSubmited}
                />}
        </Card>
    );
}

export default AjouterProduit;
