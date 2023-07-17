import { useProduitsListe } from "../../hooks/useProduitsListe";
import ProduitElement from "./ProduitElement";
import Paginator from ".//Paginator";

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
            <Paginator 
                pageNumber={pageNumber}
                hasPrevious={hasPrevious}
                onPrevious={goPrevious}
                hasNext={hasNext}
                onNext={goNext}
            />
        </>
    );
}

export default ListeProduits;
