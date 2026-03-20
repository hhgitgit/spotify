import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import './Layout.css';

function Layout() {
    return(
        <div>
            <Header />
            <main style={{
                display: 'flex',
                gap: '0.5%',
                justifyContent: 'center'
            }}>
                <Aside />
                <div className="main-right">
                    <Outlet />
                    <Footer />
                </div>
            </main>
            <Banner />
        </div>
    );  
}

export default Layout;