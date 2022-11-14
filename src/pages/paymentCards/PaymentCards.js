import './PaymentCards.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import CardInfo from '../../components/cardInfo/CardInfo'
import ModelPayCard from '../../components/modelPayCard/ModelPayCard'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import axios from 'axios'
import { baseCartao } from "../../environments";
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { Alert } from 'react-bootstrap'

function PaymentCards() {

    const [cartao, setCartao] = useState([])
    const [successDelete, setSuccessDelete] = useState(false);

    let id = localStorage.getItem('id')

    useEffect(() => {
        getCartao()
    }, [])


    const getCartao = () => {
        axios.get(`${baseCartao}/${id}/detalhes`)
            .then((response) => {
                setCartao(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const deleteCartao = (cartao) => {
        axios.delete(`${baseCartao}/${id}/deletar/${cartao}`)
            .then(() => {
                getCartao()
                setSuccessDelete(true)
                setTimeout(
                    () => {
                        setSuccessDelete(false)
                    }, 3000)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function listarCartao() {
        return cartao.map(item => {
            return (
                <div class="row mb-3 pb-3 pt-3">
                    <div key={item.id}>
                        <CardInfo id={item.id} nome={item.idBandeira.nome} numero={item.numeroCartao} mes={item.diaVencimento} ano={item.anoVencimento} delete={deleteCartao} get={getCartao} />
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <Header />
            <div class="container mt-3 mb-4  ">

                <div class="row ">
                    {/* <!--************* Parte esquerda da pagina começo *********************--> */}
                    <div class="col-2 col-sm-3  ">
                        <CustomerMenu />
                    </div>
                    {/* <!--************* COMEÇO DIREITA da pagina começo  *********************-->  */}
                    <div class="col-12 col-sm-9 order-md-last  mb-3">
                        <Title label="Meus Cartões" />
                        {/* <!-- area do primeira cartão --> */}
                        {
                            successDelete
                                ?
                                <Alert key='success' variant='success'>
                                    <AiFillCheckCircle size="30" /> Item apagado com suceso
                                </Alert>
                                :
                                ''
                        }
                        {listarCartao()}

                        {/* <!-- ************************MODEL PARA CADASTRO DE CARTÃO ********************* --> */}
                        {/* <!-- DIVISÃO DOS BUTTONS --> */}
                        <div className='mt-5 row '>
                            <div className="col-12 d-grid gap-2 col-sm-8   mb-2 ">
                                <ModelPayCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />




        </>
    )
}

export default PaymentCards
