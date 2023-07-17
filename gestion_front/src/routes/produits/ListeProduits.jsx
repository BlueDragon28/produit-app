import { useProduitsListe } from "../../hooks/useProduitsListe";
import Button from "../../components/UI/Button";
import ProduitElement from "../../components/produit/ProduitElement";

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
        <ProduitElement key={produit.id} produit={produit}/>
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
