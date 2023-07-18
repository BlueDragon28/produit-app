import { useEffect, useState } from "react";

const produitDetailEndpoint = "/api/produits/";

export function useProduitElement(produitID) {
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        fetch(produitDetailEndpoint + produitID, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(produit => {
                setProduit(produit);
            })
            .catch(error => {
                console.err(error);
            });
    }, [produitID]);

    return produit;
}
