import { useProduitsListe } from "../../hooks/useProduitsListe";
import AjouterProduit from "../../components/produit/AjouterProduit";
import ListeProduits from "../../components/produit/ListeProduits";

function Produits() {
    const [
        produits, 
        pageNumber,
        hasNext, 
        hasPrevious,
        goNext,
        goPrevious,
        updateCurrentPage
    ] = useProduitsListe();

    function onProduitCreated() {
        updateCurrentPage && updateCurrentPage();
    }

    return (
        <>
            <AjouterProduit 
                onProduitCreated={onProduitCreated}
            />
            <ListeProduits
                produits={produits}
                pageNumber={pageNumber}
                hasNext={hasNext}
                hasPrevious={hasPrevious}
                onNext={goNext}
                onPrevious={goPrevious}
            />
        </>
    )
}

export default Produits;
