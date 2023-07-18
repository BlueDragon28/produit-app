import styles from "./ErrorCard.module.css";

function ErrorCard({ children }) {
    return (
        <div className={styles["error-card"]}>
            { children }
        </div>
    );
}

export default ErrorCard;
