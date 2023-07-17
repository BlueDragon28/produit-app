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

    return (
        <>
            {!isUnfolded && 
                <Button onClick={onFold}>Ajouter Produit</Button>}
            {isUnfolded && 
                <AjouterProduitForm onCancel={onUnfold}/>}
        </>
    );
}

export default AjouterProduit;
