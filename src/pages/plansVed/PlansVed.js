import './PlansVed.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { baseCategoria } from '../../environments'
// import CartContext from '../../context/Cart.provider'



function PlansVed() {

    const [plano, setPlano] = useState([]);
    // const { addCarrinho } = useContext(CartContext)

    useEffect(() => {
        getPlano()
    }, [])

    const getPlano = () => {
        axios.get(`${baseCategoria}/categoria=5/planos`)
            .then((response) => {
                setPlano(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }
    const listPlanos = () => {
        return (plano.map((plano) => {
            return (


                <div Key={plano.id} className="item  margens  col-lg-3 mb-3 pb-4">

                    <h2 className="plan2">{plano.nome} </h2>
                    {/*<h2 className="plan2">{plano.descricao}</h2>*/}
                    <hr />
                    <h2 className="plan2">R$ {plano.preco}</h2>
                    <p>Parcele em até 4x sem juros</p>
                    <hr />

                 
                    {/* <Button card plans success label='Assine' className="" link={`/product/${plano.id}`} /> 

                    <Button card plans success label='Assine'/>  
                    
                    <Link to={`/category/${cate.id}`} className="nav-link menuletra" href={cate.id}>{cate.descricao}</Link>*/}
                       
                              <Button success label='Assine'  className="w-100" link={`/product/${plano.id}`} />
                                     
                  
                 
                </div>

            )
        }))
    }





    return (
        <>
            <Header />
            <div className="container  text-center justify-content-between">

                <Title label="Nossos Planos" />
                <div className="row mt-5 justify-content-between align-items-center">

                    {listPlanos()}
                </div>

            </div>
            <div className="container">
                <hr />
                <h2 className="termos mt-5 text-center termos-h2">Termos:</h2>
                <div className="row text-center mb-5 texto-p">
                    <p>
                        Programe suas compras e tenha mais tempo para cuidar de você. Nossas asssinaturas combinam saúde e
                        praticidade.
                        Com elas, é possível assinar qualquer item do nosso mercado ou nossas cestas prontas, montadas por nossa
                        equipe
                        com os alimentos da estação, na frequência que desejar - semanal, quinzenal ou mensal.
                        E você pode cancelar ou alterar a assinatura quando quiser!
                    </p>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default PlansVed