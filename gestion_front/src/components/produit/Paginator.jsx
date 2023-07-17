import Button from "../UI/Button";

function Paginator({ 
    pageNumber, 
    hasPrevious, 
    onPrevious, 
    hasNext, 
    onNext 
}) {
    return (
        <>
            <Button disabled={!hasPrevious} onClick={onPrevious}>Previous</Button>
            <span>{pageNumber}</span>
            <Button disabled={!hasNext} onClick={onNext}>Next</Button>
        </>
    );
}

export default Paginator;
