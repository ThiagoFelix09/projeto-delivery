import Navbar from "../../components/navbar/navbar.jsx";
import "./checkout.css";


function Checkout(){
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
                    <input type="text" id="nome" />
                </div>

                <div className="input-group">
                    <p>E-mail</p>
                    <input type="email" id="email" />
                </div>

                <div className="input-group">
                    <p>Telefone de Contato</p>
                    <input type="text" id="fone" />
                </div>

            </div>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Endereço de Entrega</h3>

                <div className="input-group">
                    <p>CEP</p>
                    <input type="text" id="cep" />
                </div>

                <div className="input-group">
                    <p>Endereço</p>
                    <input type="text" id="endereco" />
                </div>

                <div className="input-group">
                    <p>Bairro</p>
                    <input type="text" id="bairro" />
                </div>

                <div className="input-group">
                    <p>Cidade</p>
                    <input type="text" id="cidade" />
                </div>

                <div className="input-group">
                    <p>UF</p>
                    <select id="UF">
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
                    <span><strong>R$ 50,00</strong></span>
                </div>

                <div className="checkout-button">
                    <button className="btn btn-checkout">Finalizar Pedido</button>

                </div>

            </div>
        </div>
    </div>
    </>
}

export default Checkout;