import React, { useState, createContext, useEffect } from 'react'
import { baseCliente, baseLogin } from '../environments'
import axios from 'axios'


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setClient] = useState(null)
    const [nome, setNome] = useState('')
    const [token, setToken] = useState('')
    const [clienteDados, setClienteDados] = useState({})
    const [logiin, setLogiin] = useState({})

    const getCliente = (idcliente) => {
        axios.get(`${baseCliente}/${idcliente}`)
            .then((response) => {
                setClienteDados(response.data)
                console.log(response.data)
                localStorage.cliente = JSON.stringify(response.data)
                
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const LogarCliente = async (login) => {
        let success = false
        setLogiin(login)
        await axios.post(`${baseLogin}auth`, login)
            .then((response) => {
                setNome(response.data.nome)
                localStorage.setItem('nome', JSON.stringify(response.data.nome))
                setClient(response.data.id)
                localStorage.setItem('id', JSON.stringify(response.data.id))
                setToken(response.data.token)
                localStorage.setItem('token', JSON.stringify(response.data.token))
                axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
                success = true
                getCliente(response.data.id)
            })
            .catch((error) => {
                console.error(error.messege)
            })

        return success
    }



  

    function AtualizarNome() {
        setClienteDados(JSON.parse(localStorage.getItem('cliente')))
        setNome(JSON.parse(localStorage.getItem('nome')))
        setClient(JSON.parse(localStorage.getItem('id')))
    }
    function getIdCliente() {
        setClient(JSON.parse(localStorage.getItem('id')))
        getCliente(JSON.parse(localStorage.getItem('id')))
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }


    function getDadosDoCliente() {
        setClienteDados(JSON.parse(localStorage.getItem('cliente')))
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }






    return (
        <ClientContext.Provider
            value={{
                client, getCliente, LogarCliente, AtualizarNome,
                Autorizado: !!client, nome, clienteDados, getIdCliente,
                getDadosDoCliente
            }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
