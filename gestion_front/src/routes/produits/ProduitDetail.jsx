import { useParams } from "react-router-dom";
import { useProduitElement } from "../../hooks/useProduitElement";

function ProduitDetail() {
    const { produitID } = useParams();
    const produit = useProduitElement(produitID);

    if (!produit) {
        return <></>
    }

    const { name, prix_unitaire, quantite } = produit;

    return (
        <>
            <div>{name}</div>
            <div>Prix: {prix_unitaire}€</div>
            <div>Quantitie: {quantite}</div>
        </>
    );
}

export default ProduitDetail;
