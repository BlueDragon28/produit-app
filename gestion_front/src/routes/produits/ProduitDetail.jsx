import { useParams, useNavigate, Link } from "react-router-dom";
import { useProduitElement } from "../../hooks/useProduitElement";
import Button from "../../components/UI/Button";

function ProduitDetail() {
    const navigate = useNavigate();
    const { produitID } = useParams();
    const produit = useProduitElement(produitID);

    if (!produit) {
        return <></>;
    }

    const { href, name, prix_unitaire, quantite } = produit;

    function supprimerProduit() {
        fetch(href, {
            method: "DELETE"
        })
            .then(response => response.text())
            .then(text => {
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div>{name}</div>
            <div>Prix: {prix_unitaire}€</div>
            <div>Quantitie: {quantite}</div>
            <Link to="..">Retour</Link>
            <Button onClick={supprimerProduit}>Supprimer</Button>
            <Link to="edit">Éditer</Link>
        </>
    );
}

export default ProduitDetail;
