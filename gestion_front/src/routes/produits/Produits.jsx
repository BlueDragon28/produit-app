import { useProduitsListe } from "../../hooks/useProduitsListe";
import RechercheProduits from "../../components/produit/RechercheProduits";
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
        updateCurrentPage,
        setRechercheText
    ] = useProduitsListe();

    function onProduitCreated() {
        updateCurrentPage && updateCurrentPage();
    }

    function onRecherche(recherche) {
        setRechercheText(recherche);
    }

    return (
        <>
            <RechercheProduits 
                onSubmit={onRecherche}
            />
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
