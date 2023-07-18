import styles from "./Input.module.css";

function Input(props) {
    const { className, children, id } = props;

    const allProps = {...props}
    className && delete allProps.className;
    children && delete allProps.children;
    id && delete allProps.id;

    return (
        <div
            className={`${styles["input-control"]} ${className ? className : ""}`} 
        >
            <label htmlFor={id ? id : ""}>{children}</label>
            <input 
                id={id ? id : ""}
                {...allProps}
            />
        </div>
    );
}

export default Input;
