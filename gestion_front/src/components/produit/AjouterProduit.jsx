import { useState } from "react";
import Button from "../UI/Button";
import ProduitForm from "./ProduitForm";
import Card from "../UI/Card";
import ErrorCard from "../UI/ErrorCard";

const createEndpoint = "/api/produits";

function AjouterProduit({ onProduitCreated }) {
    const [isUnfolded, setIsUnfolded] = useState(false);
    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    function onFold() {
        setIsUnfolded(true);
        setError({
            isError: false,
            message: ""
        });
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

        if (response.status !== 201) {
            let message = `${Object.keys(jsonResponse)[0]}: ${Object.values(jsonResponse)[0]}`;

            setError({
                isError: true,
                message: message
            });
        } else {
            setError({
                isError: false,
                message: ""
            });
        }

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
                <>
                    {error.isError && <ErrorCard>{error.message}</ErrorCard>}
                    <ProduitForm 
                        onCancel={onUnfold}
                        onSubmit={onFormSubmited}
                    />
                </>
            }
        </Card>
    );
}

export default AjouterProduit;
