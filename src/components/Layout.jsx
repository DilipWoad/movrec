import { Outlet } from "react-router";
import Header from "./Header/Header";

const Layout = ()=>{
    return(
        <div className="">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}


export default Layout;