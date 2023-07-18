import styles from "./ProduitElement.module.css";

function ProduitElement({ produit }) {
    const { name, prix_unitaire } = produit;

    return (
        <div class={styles["produit-element"]}>
            {name} - {prix_unitaire}
        </div>
    );
}

export default ProduitElement;
