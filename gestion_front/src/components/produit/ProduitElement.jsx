import { Link } from "react-router-dom";

import styles from "./ProduitElement.module.css";

function ProduitElement({ produit }) {
    const { id, name, prix_unitaire } = produit;

    return (
        <Link 
            className={styles["produit-element"]}
            to={`produit/${id}`}
        >
            <div>{name}</div> <div>{prix_unitaire}€</div>
        </Link>
    );
}

export default ProduitElement;
