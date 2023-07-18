import Button from "../UI/Button";

import styles from "./Paginator.module.css";

function Paginator({ 
    pageNumber, 
    hasPrevious, 
    onPrevious, 
    hasNext, 
    onNext 
}) {
    return (
        <div className={styles["paginator"]}>
            <Button 
                className={styles["button-pagination"]}
                disabled={!hasPrevious} 
                onClick={onPrevious}
            >Previous</Button>
            <div className={styles["page-number"]}>{pageNumber}</div>
            <Button 
                className={styles["button-pagination"]}
                disabled={!hasNext} 
                onClick={onNext}
            >Next</Button>
        </div>
    );
}

export default Paginator;
