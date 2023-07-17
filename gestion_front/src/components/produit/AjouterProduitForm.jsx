import Button from "../UI/Button";

function AjouterProduitForm({ id, onCancel }) {
    return (
        <div>
            <div>
                <label htmlFor={`nom-${id}`}>Nom</label>
                <input id={`nom-${id}`} type="text"/>
            </div>
            <div>
                <label htmlFor={`prix-unitaire-${id}`}>Prix Unitaire</label>
                <input id={`prix-unitaire-${id}`} type="text"/>
            </div>
            <div>
                <label htmlFor={`quantitie-${id}`}>Quantité</label>
                <input id={`quantitie-${id}`} type="text"/>
            </div>
            <Button onClick={onCancel}>Annuler</Button>
            <Button>Ajouter Produit</Button>
        </div>
    )
}

export default AjouterProduitForm;
