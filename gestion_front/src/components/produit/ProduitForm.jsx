import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

function validerProduit(produit) {
    if (!produit?.name.length ||
            !produit?.prix_unitaire.length ||
            !produit?.quantite.length ||
            !(parseFloat(produit?.prix_unitaire) >= 0) ||
            !(parseInt(produit?.quantite) >= 0)) {

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
                <Input
                    id={`nom-${id}`}
                    type="text"
                    onChange={onNameChanged}
                    value={produit.name}
                    required
                >Nom</Input>
            </div>
            <div>
                <Input 
                    id={`prix-unitaire-${id}`} 
                    type="number" 
                    min="0"
                    max="99999.99"
                    step="0.01"
                    name="prix_unitaire"
                    onChange={onPrixChanged}
                    value={produit.prix_unitaire}
                    required
                >
                    Prix Unitaire
                </Input>
            </div>
            <div>
                <Input 
                    id={`quantitie-${id}`} 
                    type="number" 
                    min="0"
                    name="quantite"
                    onChange={onQuantiteChanged}
                    value={produit.quantite}
                    required
                >
                    Quantité
                </Input>
            </div>
            <Button type="button" onClick={onCancel}>Annuler</Button>
            <Button type="submit">{submitText?.length ? submitText : "Ajouter Produit"}</Button>
        </form>
    );
}

export default ProduitForm;
