import Header from "./header/Header";
import classes from './Layout.module.css';
const Layout = (props) => {
    return (
        <section>
            
            <main>{props.children}</main>
            <Header/>
        </section>
    )
}

export default Layout;