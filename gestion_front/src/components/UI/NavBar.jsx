import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <header className={styles["nav-bar"]}>
            <Link to="/">Gestion Produits</Link>
        </header>
    );
}

export default NavBar;
