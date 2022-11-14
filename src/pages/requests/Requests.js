import './Requests.css'
import react, { useEffect, useState, useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import OrderStatus from '../../components/orderStatus/OrderStatus'
import Title from '../../components/title/Title'
import axios from 'axios'
import { basePedido } from '../../environments'
import ClientContext from '../../context/Client.provider'

function Request() {

    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState([])
    const { client, getIdCliente } = useContext(ClientContext)
    

    let id = localStorage.getItem('id')
    useEffect(() => {
        getIdCliente()
        getOrders() 
    }, [])

    const getOrders = () => {
        axios.get(`${basePedido}/${id}/pedidos`)
            .then((response) => {
                setOrders(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function listOrders() {
        return (orders.map((pedidos) => {
            return (
                validaStatus(pedidos)
            )
        }))
    }


    function validaStatus(pedido) {
        if (pedido.status == "Aguardando confirmação") {
            return (
                <OrderStatus  link={pedido.id} waiting pedido={pedido.id} />
            )
        } else if (pedido.status == "Pedido confirmado") {
            return (
                <OrderStatus link={pedido.id} delivering pedido={pedido.id} />
            ) 
        } else {
            return (
                <OrderStatus link={pedido.id} canceled pedido={pedido.id} />
            )
        }
    }

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3">
                        <CustomerMenu />
                    </div>
                    <div className="col-12 col-sm-9 order-md-last  mb-3 ">
                        <Title label="Meus Pedidos" />
                        <div className="row py-3 ">
                            {listOrders()}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )


}

export default Request;