import { useState, useEffect } from "react";

const produitsListeEndpoint = "/api/produits";

async function obtenirListeProduits(pageNumber) {
    const response = await fetch(produitsListeEndpoint + `?page=${pageNumber}`);
    return response.json();
}

export function useProduitsListe() {
    const [produits, setProduits] = useState(null);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [allowUpdate, setAllowUpdate] = useState(true);

    useEffect(() => {
        if (!allowUpdate) return;

        obtenirListeProduits(pageNumber)
            .then(data => {
                setProduits(data);
                setHasNext(data?.next ? true : false);
                setHasPrevious(data?.previous ? true : false);
                setAllowUpdate(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [pageNumber, allowUpdate]);

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

    return [
        produits?.results ? produits.results : null, 
        pageNumber,
        hasNext, 
        hasPrevious,
        goNext,
        goPrevious,
        updateCurrentPage
    ];
}
