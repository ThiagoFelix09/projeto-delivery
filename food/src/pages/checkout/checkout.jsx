import Navbar from "../../components/navbar/navbar.jsx";
import "./checkout.css";
import { CartContext } from "../../contexts/cart-contexts.jsx";
import { useContext, useState } from "react";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";



function Checkout(){

    const {totalCart, cartItems, setCartItems, setTotalCart} = useContext(CartContext);

    const navigate = useNavigate();


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    function FinalizarPedido(){
        
        //Montar itens para enviar API
        let produtos = [];

        for (var prod of cartItems){
            produtos.push({
                id_produto: prod.id,
                qtd: prod.qtd,
                vl_unitario: prod.vl_preco,
                vl_total: prod.preco * prod.qtd
            });
        }

        const params = {
            id_usuario: 1,
            nome,
            email,
            fone,
            endereco,
            bairro,
            cidade,
            uf,
            cep,
            total: totalCart,
            itens: cartItems

        }

        api.post("/pedidos", params)
        .then((resp) => {
            setCartItems ([]);
            setTotalCart(0);
            navigate("/historico");
        })
        .catch((err) => {
            alert('Erro ao enviar pedido.')
        })
    }



    return <>
    <Navbar />

    <div className ="container">
        <div className ="titulo text-center">
            <h1>Finalizar Pedido</h1>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Dados Pessoais</h3>

                <div className="input-group">
                    <p>Nome Completo</p>
                    <input type="text" id="nome" onChange={(e) =>  setNome(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>E-mail</p>
                    <input type="email" id="email" onChange={(e) =>  setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Telefone de Contato</p>
                    <input type="text" id="fone" onChange={(e) =>  setFone(e.target.value)} />
                </div>

            </div>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Endereço de Entrega</h3>

                <div className="input-group">
                    <p>CEP</p>
                    <input type="text" id="cep" onChange={(e) =>  setCep(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Endereço</p>
                    <input type="text" id="endereco" onChange={(e) =>  setEndereco(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Bairro</p>
                    <input type="text" id="bairro" onChange={(e) =>  setBairro(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Cidade</p>
                    <input type="text" id="cidade" onChange={(e) =>  setCidade(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>UF</p>
                    <select id="UF" onChange={(e) =>  setUf(e.target.value)}>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                </div>

            </div>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Valores</h3>

                <div className="checkout-valores">
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCart)}</strong></span>
                </div>

                <div className="checkout-button">
                    <button onClick={FinalizarPedido} className="btn btn-checkout">Finalizar Pedido</button>

                </div>

            </div>
        </div>
    </div>
    </>
}

export default Checkout;