import { useState } from "react";
import Button from "../UI/Button";

function validerProduit(produit) {
    if (!produit?.nom.length ||
            !produit?.prix_unitaire.length ||
            !produit?.quantite.length ||
            !parseFloat(produit?.prix_unitaire) ||
            !parseInt(produit?.quantite)) {

        return false;
    }

    return true;
}

function AjouterProduitForm({ 
    id, 
    onCancel,
    onSubmit
}) {
    const [produit, setProduit] = useState({
        nom: "",
        prix_unitaire: "",
        quantite: ""
    });

    function resetInputs() {
        setProduit({
            nom: "",
            prix_unitaire: "",
            quantite: ""
        });
    }

    function onNomChanged(event) {
        setProduit(produit => ({...produit, nom: event.target.value}));
    }

    function onPrixChanged(event) {
        setProduit(produit => ({...produit, prix_unitaire: event.target.value}));
    }

    function onQuantiteChanged(event) {
        setProduit(produit => ({...produit, quantite: event.target.value}));
    }

    function onFormSubmited(event) {
        event.preventDefault();

        validerProduit(produit) && onSubmit && onSubmit(produit) && resetInputs();
    }

    return (
        <form onSubmit={onFormSubmited}>
            <div>
                <label htmlFor={`nom-${id}`}>Nom</label>
                <input 
                    id={`nom-${id}`} 
                    type="text" 
                    onChange={onNomChanged} 
                    value={produit.nom}
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
            <Button onClick={onCancel}>Annuler</Button>
            <Button>Ajouter Produit</Button>
        </form>
    );
}

export default AjouterProduitForm;
