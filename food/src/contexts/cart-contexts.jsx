import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    /*
    item:
    {
        id: 1,
        nome: "X-Tudo",
        preco: 20.00,
        foto: "htts://jornadajs-food.s3.amazinaws.com/spicy.png"
    }
    */

    function AddItemCart(item){

        let cartItemsNovo = [];
        let findItem = false;
        //verificar se o item já existe no carrinho

        for (var prod of cartItems){

            if (prod.id == item.id){
                item.qtd = prod.qtd +1;
                findItem = true;
                cartItemsNovo.push(item);
            } else {
                cartItemsNovo.push(prod);
            }
        }

        //se ele não encontrou o item ou é o primeiro item a ser inserido

        if ((findItem == false) || (cartItems.length == 0)){
            item.qtd =1;
            cartItemsNovo.push(item);
        }

        //Inserir dados na lista do carrinho
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
        //operador spred
    }

    function RemoveItemCart(id){

        let cartItemsNovo = [];
        
        //localiza o item e atualiza
        for (var prod of cartItems){

            if (prod.id == id){
                prod.qtd = prod.qtd - 1;
            }

            cartItemsNovo.push(prod);
        }

        //Remove itens zerados
        cartItemsNovo = cartItemsNovo.filter(function(item){
            return item.qtd > 0
        });

        //Inserir dados na lista do carrinho
        setCartItems(cartItemsNovo);
        CalcTotal(cartItemsNovo);
        //operador spred
    }

    function CalcTotal(items){
        let tot = 0;

        for (var item of items)
        tot = tot + (item.preco * item.qtd);

        setTotalCart(tot);
    }

    return <CartContext.Provider value={{cartItems, setCartItems, AddItemCart, RemoveItemCart, totalCart, setTotalCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};

//é o contexto de toda a aplicação para receber os childrens e fazer os templates gerais