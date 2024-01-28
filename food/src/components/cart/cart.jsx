import { Dock, dock } from "react-dock";
import { useState } from "react";
import CartList from "./CartList";


function Cart(){
    return(
        <Dock position="right"
              isVisible={true}
              fluid={false}
              size={420}
              >

            <div>
                <h1>Cart</h1>
            </div>
        </Dock>
    )
}

export default Cart;