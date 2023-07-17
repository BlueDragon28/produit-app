import { useState, useEffect } from "react";

const produitsListeEndpoint = "/api/produits";

async function obtenirListeProduits() {
    const response = await fetch(produitsListeEndpoint);
    return response.json();
}

export function useProduitsListe() {
    const [produits, setProduits] = useState(null);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    useEffect(() => {
        obtenirListeProduits()
            .then(data => {
                setProduits(data);
                setHasNext(data.next ? true : false);
                setHasPrevious(data.previous ? true : false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return [
        produits?.results ? produits.results : null, 
        hasNext, 
        hasPrevious
    ];
}
