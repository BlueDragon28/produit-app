import { useProduitsListe } from "../../hooks/useProduitsListe";
import ProduitElement from "./ProduitElement";
import Paginator from ".//Paginator";

function ListeProduits({
    produits,
    pageNumber,
    hasNext,
    hasPrevious,
    onNext,
    onPrevious
}) {
    const listeProduits = produits?.map((produit) => (
        <ProduitElement key={produit.id} produit={produit}/>
    ));

    return (
        <>
            {listeProduits && listeProduits}
            <Paginator 
                pageNumber={pageNumber}
                hasPrevious={hasPrevious}
                onPrevious={onPrevious}
                hasNext={hasNext}
                onNext={onNext}
            />
        </>
    );
}

export default ListeProduits;
