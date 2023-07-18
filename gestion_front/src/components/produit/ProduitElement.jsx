import { Link } from "react-router-dom";

import styles from "./ProduitElement.module.css";

function ProduitElement({ produit }) {
    const { id, name, prix_unitaire } = produit;

    return (
        <Link 
            class={styles["produit-element"]}
            to={`produit/${id}`}
        >
            {name} - {prix_unitaire}
        </Link>
    );
}

export default ProduitElement;
