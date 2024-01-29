import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";
import api from "../../services/api.js";



function Historico(){

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        api.get("/produtos")
        .then((resp) => {
            setPedidos(resp.data);
        })
        .catch((err) =>  {
            alert('Erro ao carregar produtos');
        })
    }, []);

    return <>
        <Navbar showMenu={true}/>

        <div className ="container">
            <div className ="titulo text-center">
                <h1>Histórico de Pedidos</h1>
            </div>

            <div className="box-pedido">
                <table className="table">
                 {
                    //MAP é um loot aplicado dentro de uma array no JS formado em dados.js
                    //key é da sintaxe JSX, obrigatória
                    pedidos.map(function(ped){
                        return  <tr key={ped.id_pedido}>
                        <td><strong>Pedido: {ped.id_pedido}</strong></td>
                        <td className="text-light">{ped.dt_pedido}</td>
                        <td className="text-red">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ped.total)}
                        </td>
                    </tr>
                    })
                    //o total do pedido, com formatação para a moeda local
                 }
                </table>
                 
            </div>
        </div>
    </>
}

export default Historico;