import { Outlet } from "react-router-dom";
import NavBar from "../components/UI/NavBar";

function RouteIndex() {
    return (
        <>
            <NavBar />
            <Outlet/>
        </>
    );
}

export default RouteIndex;
