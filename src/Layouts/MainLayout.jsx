import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const MainLayout = () => {

    

    return (
        <div>
            <Header></Header>
            <div className="min-h-screen px-10">
                <Outlet></Outlet>
            </div>

           <Footer></Footer>

        </div>
    );
};

export default MainLayout;