import Header from "./header/Header";
import Footer from "./footer/Footer";
import classes from './Layout.module.css';
const Layout = (props) => {
    return (
        <section>
            
            <main>{props.children}</main>
            <Header/>
            <Footer />
        </section>
    )
}

export default Layout;