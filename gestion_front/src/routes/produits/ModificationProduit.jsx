import { useProduitElement } from "../../hooks/useProduitElement";
import { useNavigate, useParams } from "react-router-dom";
import ProduitForm from "../../components/produit/ProduitForm";

function ModificationProduit() {
    const navigate = useNavigate();
    const { produitID } = useParams();
    const produit = useProduitElement(produitID);

    if (!produit) {
        return <></>;
    }

    const { href } = produit;

    function onCancel() {
        navigate(`/produit/${produitID}`);
    }

    async function onSubmit(produit) {
        try {
            const response = await fetch(href, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produit)
            });
            const data = await response.json();
            console.log(data);
            navigate(`/produit/${produitID}`);
        } catch (error) {
            console.log(error);
            return false;
        }
        return true;
    }

    return (
        <ProduitForm 
            data={produit}
            onCancel={onCancel}
            onSubmit={onSubmit}
            submitText="Modifier Produit"
        />
    );
}

export default ModificationProduit;
