import { useProduitsListe } from "../../hooks/useProduitsListe";
import Button from "../../components/UI/Button";
import ProduitElement from "../../components/produit/ProduitElement";
import Paginator from "../../components/produit/Paginator";

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
