import { useEffect, useState } from "react";

/*
* Hook custom pour récupérer le détail d'un produit
*/

const produitDetailEndpoint = "/api/produits/";

export function useProduitElement(produitID) {
    const [produit, setProduit] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(produitDetailEndpoint + produitID, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(produit => {
                if (produit?.detail) {
                    setIsError(true);
                    return;
                }

                setProduit(produit);
            })
            .catch(error => {
                setIsError(true);
            });
    }, [produitID]);

    return [produit, isError];
}
