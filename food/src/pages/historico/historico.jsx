import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";


function Historico(){

    const pedidos = [
        {id_pedido: 1, dt: "28/01/2024", total: 100},
        {id_pedido: 2, dt: "28/01/2024", total: 125},
        {id_pedido: 3, dt: "28/01/2024", total: 10},
        {id_pedido: 4, dt: "28/01/2024", total: 57},
        {id_pedido: 5, dt: "28/01/2024", total: 100},
        {id_pedido: 6, dt: "28/01/2024", total: 125},
        {id_pedido: 7, dt: "28/01/2024", total: 10},
        {id_pedido: 8, dt: "28/01/2024", total: 57},
    ];

    return <>
        <Navbar showMenu={true}/>

        <div className ="container">
            <div className ="titulo text-center">
                <h1>Histórico de Pedidos</h1>
            </div>

            <div className="box-pedido">
                <table className="table">
                    <tr>
                        <td><strong>Pedido: 1</strong></td>
                        <td className="text-light">28/01/2024</td>
                        <td className="text-red">R$ 100,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido: 2</strong></td>
                        <td className="text-light">28/01/2024</td>
                        <td className="text-red">R$ 125,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido: 3</strong></td>
                        <td className="text-light">28/01/2024</td>
                        <td className="text-red">R$ 10,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido: 4</strong></td>
                        <td className="text-light">28/01/2024</td>
                        <td className="text-red">R$ 57,00</td>
                    </tr>
                </table>

            </div>
        </div>
    </>
}

export default Historico;