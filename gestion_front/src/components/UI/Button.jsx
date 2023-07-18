import styles from "./Button.module.css";

function Button(props) {
    const { className } = props;

    const allProps = {...props};
    className && delete allProps.className;

    return (
        <button className={`${styles["button-module"]} ${className ? className : ""}`} {...props}/>
    )
}

export default Button;
