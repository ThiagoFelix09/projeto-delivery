import { Dock } from "react-dock";
import { useEffect, useState } from "react";
import ProdutoCart from "../produto-cart/produto-cart";
import "./cart.css";
import { useNavigate } from "react-router-dom";
//import { checkout } from "../../pages/checkout/checkout.jsx";
//import CartList from "./CartList";


function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect( function(){
        window.addEventListener('openSidebar', function(){
            setShow(true);
        });
    }, []);

    function checkout(){
        navigate('/checkout');
    }


    return(
        <Dock position="right"
              isVisible={show}
              fluid={false}
              size={420}
              onVisibleChange={function(visible) {
                  setShow(visible);
              }}
              >

            <div className="text-center">
                <h1>Meu Pedido</h1>
            </div>

            <div className="lista-produtos">
              <ProdutoCart />
              <ProdutoCart />
              <ProdutoCart />
              <ProdutoCart />
              <ProdutoCart />

            </div>

            <div className="footer-cart">
                <div className="footer-cart-valor">
                    <span>Total</span>
                    <span><strong>R$ 250,00</strong></span>
                </div>
                <div>
                    <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
                </div>
            </div>
        </Dock>
    )
}

export default Cart;