import Header from "../compenents/Header/Header";
import Footer from "../compenents/Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = (props) => {

    return (
        <>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </>
    )
}

export default Layout