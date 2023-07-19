import styles from "./Card.module.css";

function Card({ children, isError }) {
    return (
        <div 
            className={`${styles["card"]} ${isError ? styles["card-error"] : ""}`}
        >
            { children }
        </div>
    )
}

export default Card;
