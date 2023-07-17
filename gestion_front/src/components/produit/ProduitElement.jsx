function ProduitElement({ produit }) {
    const { name, prix_unitaire } = produit;

    return (
        <div>
            {name} - {prix_unitaire}
        </div>
    );
}

export default ProduitElement;
