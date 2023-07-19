import { useState, useEffect } from "react";

/*
* Hook custom pour récupérer la liste de produits paginée en y appliquant la
* recherche si indiqué.
*/

const produitsListeEndpoint = "/api/produits";

async function obtenirListeProduits(pageNumber, rechercheText) {
    const response = await fetch(produitsListeEndpoint + 
        `?page=${pageNumber}${rechercheText?.length ? `&search=${rechercheText}` : ""}`);
    return response.json();
}

export function useProduitsListe() {
    const [produits, setProduits] = useState(null);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [allowUpdate, setAllowUpdate] = useState(true);
    const [rechercheText, setRechercheText] = useState("");

    useEffect(() => {
        if (!allowUpdate) return;

        obtenirListeProduits(pageNumber, rechercheText)
            .then(data => {
                setProduits(data);
                setHasNext(data?.next ? true : false);
                setHasPrevious(data?.previous ? true : false);
                setAllowUpdate(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [pageNumber, allowUpdate, rechercheText]);

    function goNext() {
        if (!hasNext) return;

        setPageNumber(pageNumber => pageNumber + 1);
        setAllowUpdate(true);
    }

    function goPrevious() {
        if (!hasPrevious) return;

        setPageNumber(pageNumber => pageNumber - 1);
        setAllowUpdate(true);
    }

    function updateCurrentPage() {
        setAllowUpdate(true);
    }

    function recherche(rechercheText) {
        setRechercheText(rechercheText);
        setPageNumber(1);
        setAllowUpdate(true);
    }

    return [
        produits?.results ? produits.results : null, 
        pageNumber,
        hasNext, 
        hasPrevious,
        goNext,
        goPrevious,
        updateCurrentPage,
        recherche
    ];
}
