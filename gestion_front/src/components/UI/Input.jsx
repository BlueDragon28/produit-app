import styles from "./Input.module.css";

function Input(props) {
    const { className } = props;

    const allProps = {...props}
    className && delete allProps.className;

    return (
        <div
            className={`${styles["input-control"]} ${className ? className : ""}`} 
        >
            <input 
                {...props}
            />
        </div>
    );
}

export default Input;
