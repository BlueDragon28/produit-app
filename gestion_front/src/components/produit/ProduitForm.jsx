import { useState } from "react";
import Button from "../UI/Button";

function validerProduit(produit) {
    if (!produit?.name.length ||
            !produit?.prix_unitaire.length ||
            !produit?.quantite.length ||
            !parseFloat(produit?.prix_unitaire) ||
            !parseInt(produit?.quantite)) {

        return false;
    }

    return true;
}

function ProduitForm({ 
    id, 
    onCancel,
    onSubmit,
    data,
    submitText
}) {
    const [produit, setProduit] = useState({
        name: data?.name ? data.name : "",
        prix_unitaire: data?.prix_unitaire ? data.prix_unitaire : "",
        quantite: data?.quantite ? data.quantite.toString() : ""
    });

    function resetInputs() {
        setProduit({
            name: "",
            prix_unitaire: "",
            quantite: ""
        });
    }

    function onNameChanged(event) {
        setProduit(produit => ({...produit, name: event.target.value}));
    }

    function onPrixChanged(event) {
        setProduit(produit => ({...produit, prix_unitaire: event.target.value}));
    }

    function onQuantiteChanged(event) {
        setProduit(produit => ({...produit, quantite: event.target.value}));
    }

    function onFormSubmited(event) {
        event.preventDefault();

        const submitProduit = {
            name: produit.name.trim(),
            prix_unitaire: produit.prix_unitaire.trim(),
            quantite: produit.quantite.trim()
        };

        validerProduit(submitProduit) && onSubmit && onSubmit(submitProduit)
            .then(result => result && resetInputs());
    }

    return (
        <form onSubmit={onFormSubmited}>
            <div>
                <label htmlFor={`nom-${id}`}>Nom</label>
                <input 
                    id={`nom-${id}`} 
                    type="text" 
                    onChange={onNameChanged} 
                    value={produit.name}
                />
            </div>
            <div>
                <label htmlFor={`prix-unitaire-${id}`}>Prix Unitaire</label>
                <input 
                    id={`prix-unitaire-${id}`} 
                    type="text" 
                    name="prix_unitaire"
                    onChange={onPrixChanged}
                    value={produit.prix_unitaire}
                />
            </div>
            <div>
                <label htmlFor={`quantitie-${id}`}>Quantité</label>
                <input 
                    id={`quantitie-${id}`} 
                    type="text" 
                    name="quantite"
                    onChange={onQuantiteChanged}
                    value={produit.quantite}
                />
            </div>
            <Button type="button" onClick={onCancel}>Annuler</Button>
            <Button type="submit">{submitText?.length ? submitText : "Ajouter Produit"}</Button>
        </form>
    );
}

export default ProduitForm;
