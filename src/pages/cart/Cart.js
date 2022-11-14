import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import ItemBasket from '../../components/itemBasket/ItemBasket'
import CartContext from '../../context/Cart.provider'
import Title from '../../components/title/Title'
import React, { useEffect, useContext } from 'react'

function Cart() {
    const { carrinho, listarCarrinho, valorTotal, total } = useContext(CartContext)

    const listaItem = carrinho
    useEffect(() => {
        listarCarrinho()
        listar()
        total()
    }, [])

    function listar() {
        if (carrinho.length == 0) {
            return <li className="text-center">Seu carrinho está vazio</li>
        }
        return carrinho.map((item) => {
            return (
                <li key={item.id}>
                    <ItemBasket id={item.id} img={item.url} product={item} valor={item.preco} descricao={item.descricao} qty={item.quantidade} nome={item.nomeProduto} />
                </li>
            )
        })
    }



    function showPrice(number) {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        return (
            <>
                <h6 className="">{priceConverted}</h6>
            </>
        )
    }

    return (
        <>
            <Header />
            {/* <!-- Titulo --> */}
            <div className="container">
                <div className="container">
                    <div className="row  mb-3 text-center mt-3">
                        <Title label='Sua cesta' ></Title>
                    </div>
                    <ul>
                        {listar()}
                    </ul>

                    <div className="text-end">
                        <h4 className="text-dark   mt-3 mb-3">
                            Valor Total:  {showPrice(valorTotal)}
                        </h4>

                        <div className="container mb-3 border">

                            {/* <!--cep--> */}
                            <div className="row">
                                <div className=" d-flex align-items-center justify-content-center">
                                    <div className="col-sm-12 col-lg-6 justify-content-end d-flex ">
                                        
                                    </div>
                                    <div className="col-sm-12  mt-1 col-lg-6 justify-content-end d-flex ">
                                        <Button link="/checkout" cart card success label='Finalizar Compra' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--***************************************CESTA END***********************************--> */}
            <Footer />
        </>
    )
}

export default Cart