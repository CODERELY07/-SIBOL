import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({children}) => {
    return(
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
                <Footer/>
            </main>
        </div>
    );
    
}

export default Layout;