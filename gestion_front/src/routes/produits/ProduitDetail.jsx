import { useParams, useNavigate, Link } from "react-router-dom";
import { useProduitElement } from "../../hooks/useProduitElement";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";

import styleButton from "../../components/UI/Button.module.css";
import style from "./ProduitDetail.module.css";

/*
* Affiche le détail du produit
*/

function ProduitDetail() {
    const navigate = useNavigate();
    const { produitID } = useParams();
    const [produit, isError] = useProduitElement(produitID);

    if (isError) {
        return (
            <Card isError={true}>
                Ce produit n'existe pas!
            </Card>
        );
    }

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
        <Card>
            <h1 className={style["produit-nom"]}>{name}</h1>
            <div className={style["produit-info"]}>Prix: {prix_unitaire}€</div>
            <div className={style["produit-info"]}>Quantité: {quantite}</div>
            <div className={style["button-container"]}>
                <Link className={`${styleButton["button-module"]} ${style["button-link"]}`} to="..">Retour</Link>
                <Button onClick={supprimerProduit}>Supprimer</Button>
                <Link className={`${styleButton["button-module"]} ${style["button-link"]}`} to="edit">Éditer</Link>
            </div>
        </Card>
    );
}

export default ProduitDetail;
