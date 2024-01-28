import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
import {Link} from "react-router-dom";

function Navbar(props){

    function opneSidebar (){
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
        //document.getElementById("sidebar").style.width = "420px";
    }
    return <div className="navbar">
        <img src={logo} className="logotipo" alt="Logotipo" />

        {
            props.showMenu &&
                <div className="menu">
                <Link to="/historico">Histórico</Link>
                <button onClick={opneSidebar} className=" btn btn-red">
                    <img src={bag} className="icon" alt=""/>
                    Sacola
                </button>
                </div>
            
        }

        <Cart />
    </div>
}

export default Navbar;