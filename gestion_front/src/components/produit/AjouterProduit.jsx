import { useState } from "react";
import Button from "../UI/Button";
import AjouterProduitForm from "./AjouterProduitForm";

function AjouterProduit() {
    const [isUnfolded, setIsUnfolded] = useState(false);

    function onFold() {
        setIsUnfolded(true);
    }

    function onUnfold() {
        setIsUnfolded(false);
    }

    function onFormSubmited(produit) {
        console.log(produit);
        return true;
    }

    return (
        <>
            {!isUnfolded && 
                <Button onClick={onFold}>Ajouter Produit</Button>}
            {isUnfolded && 
                <AjouterProduitForm 
                    onCancel={onUnfold}
                    onSubmit={onFormSubmited}
                />}
        </>
    );
}

export default AjouterProduit;
