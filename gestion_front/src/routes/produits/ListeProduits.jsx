import { useProduitsListe } from "../../hooks/useProduitsListe";
import Button from "../../components/UI/Button";

function ListeProduits() {
    const [
        produits, 
        pageNumber,
        hasNext, 
        hasPrevious,
        goNext,
        goPrevious
    ] = useProduitsListe();

    const listeProduits = produits?.map((produit) => (
        <div key={produit.id}>
            {produit.name} - {produit.prix_unitaire}€
        </div>
    ));

    return (
        <>
            {listeProduits && listeProduits}
            <Button 
                disabled={!hasPrevious}
                onClick={goPrevious}
            >
                Previous
            </Button>
            <span>{pageNumber}</span>
            <Button 
                disabled={!hasNext}
                onClick={goNext}
            >
                Next
            </Button>
        </>
    );
}

export default ListeProduits;
