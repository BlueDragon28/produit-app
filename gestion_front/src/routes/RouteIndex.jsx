import { Outlet } from "react-router-dom";

function RouteIndex() {
    return (
        <>
            <header>
                <div>Gestion Produits</div>
            </header>
            <Outlet/>
        </>
    );
}

export default RouteIndex;
