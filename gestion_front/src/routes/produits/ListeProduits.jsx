import { useProduitsListe } from "../../hooks/useProduitsListe";

function ListeProduits() {
    const [
        produits, 
        pageNumber,
        hasNext, 
        hasPrevious,
        goNext,
        goPreivous
    ] = useProduitsListe();

    const listeProduits = produits?.map((produit) => (
        <div key={produit.id}>
            {produit.name} - {produit.prix_unitaire}€
        </div>
    ));

    return (
        <>
            {listeProduits && listeProduits}
        </>
    );
}

export default ListeProduits;
