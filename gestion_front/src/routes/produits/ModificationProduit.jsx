import { useState } from "react";
import { useProduitElement } from "../../hooks/useProduitElement";
import { useNavigate, useParams } from "react-router-dom";
import ProduitForm from "../../components/produit/ProduitForm";
import Card from "../../components/UI/Card";
import ErrorCard from "../../components/UI/ErrorCard";

function ModificationProduit() {
    const navigate = useNavigate();
    const { produitID } = useParams();
    const produit = useProduitElement(produitID);
    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    if (!produit) {
        return <></>;
    }

    const { href } = produit;

    function onCancel() {
        navigate(`/produit/${produitID}`);
    }

    async function onSubmit(produit) {
        const response = await fetch(href, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produit)
        });
        const data = await response.json();

        if (response.status === 200) {
            navigate(`/produit/${produitID}`);
            return true;
        } else {
            const message = 
                `${Object.keys(data)[0]}: ${Object.values(data)[0]}`;

            setError({
                isError: true,
                message
            });

            return false;
        }
    }

    return (
        <Card>
            {error.isError &&
                <ErrorCard>{error.message}</ErrorCard>}
            <ProduitForm 
                data={produit}
                onCancel={onCancel}
                onSubmit={onSubmit}
                submitText="Modifier Produit"
            />
        </Card>
    );
}

export default ModificationProduit;
