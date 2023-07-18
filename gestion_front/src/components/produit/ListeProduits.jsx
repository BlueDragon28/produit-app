import ProduitElement from "./ProduitElement";
import Paginator from "./Paginator";
import Card from "../UI/Card";

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
        <Card>
            {listeProduits && listeProduits}
            <Paginator 
                pageNumber={pageNumber}
                hasPrevious={hasPrevious}
                onPrevious={onPrevious}
                hasNext={hasNext}
                onNext={onNext}
            />
        </Card>
    );
}

export default ListeProduits;
