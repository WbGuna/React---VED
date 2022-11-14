import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Title from '../../components/title/Title'
import React, { useState, useEffect, useContext } from 'react'
import { baseEndereco } from '../../environments'
import { AiOutlineCloseCircle, AiFillCheckCircle } from "react-icons/ai"
import axios from 'axios'
import ClientContext from '../../context/Client.provider'
import { Alert, Modal } from 'react-bootstrap'

function Address() {
    const [endereco, setEndereco] = useState([])
    const [successDelete, setSuccessDelete] = useState(false);


    let id = localStorage.getItem('id')
    useEffect(() => {
        getEndereco()

    }, [])

    const getEndereco = () => {
        axios.get(`${baseEndereco}/${id}/detalhes`)
            .then((response) => {
                setEndereco(response.data)
                listEnderecos()
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const deleteEndereco = (endereco) => {
        axios.delete(`${baseEndereco}/${id}/delete/${endereco}`)
            .then(() => {
                getEndereco()
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

    function listEnderecos() {
        return endereco.map(endereco => {
            return (
                <div key={endereco.id}>
                    <AddressInfo av={endereco.rua} n={endereco.numero} complement={endereco.complemento} district={endereco.id} zipcode={endereco.cep} city={endereco.cidade} states={endereco.municipio} id={endereco.id} delete={deleteEndereco} />
                </div >
            )
        })
    }
    console.log(endereco)


    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>
                    {/* <!--************* COMEÇO DIREITA da pagina começo  *********************-->  */}
                    <div class="col-12 col-sm-9 order-md-last  mb-3">
                        <Title label="Meus endereços" />
                        {/* <!-- area do primeira cartão --> */}
                        <div class="row  mb-3 pb-3 pt-3">
                            <div class="row ">
                                {
                                    successDelete
                                        ?
                                        <Alert key='success' variant='success'>
                                            <AiFillCheckCircle size="30" /> Item apagado com suceso
                                        </Alert>
                                        :
                                        ''
                                }

                                {listEnderecos()}
                            </div>
                        </div>

                        <div className='mt-5 row '>
                            <div className="col-12 d-grid gap-2 col-sm-8    ">
                                <ModalEndereco lista={listEnderecos} get={getEndereco} />
                            </div>

                        </div>
                        {/*  ****************** CAMPO DO MODAL ****************** */}
                    </div>
                </div>
            </div>



            <Footer />

        </>
    )

}

export default Address;