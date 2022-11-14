import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/Cart.provider'
import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import transgenico from '../../components/asserts/imagens/selo-produtos/nao-transgenico.png'
import vegano from '../../components/asserts/imagens/selo-produtos/sem-gluten.png'
import gluten from '../../components/asserts/imagens/selo-produtos/vegano.png'
import ProductCard from '../../components/productCard/ProductCard'
import { Accordion } from 'react-bootstrap'
import Title from '../../components/title/Title'
import ModalConsumo from '../../components/modalConsumo/ModalConsumo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseProduct } from '../../environments'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [receita, setReceita] = useState({})
    const [productDetail, setProductDetail ] = useState(1)
    const receitasbotao = false
    const { quantidadeProduto, addCarrinho,
    incrementoQuantyProduto, decrementoQuantyProduto, carrinho } = useContext(CartContext)
    let quanti = product.quantidade 
    useEffect(() => {
        setProductDetail(quanti)
        getReceita()
        validaCart()
    }, [])

    function validaCart() {
        if (carrinho.find(produto => id == produto.id)){
            setProduct(carrinho.find(produto => id == produto.id)) 
            setProductDetail(product.quantidade)
        } else {
            getProduct()
        }
    }

    const getProduct = () => {
        axios.get(`${baseProduct}/${id} `)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const getReceita = () => {
        axios.get(`${baseProduct}/${id}/receita `)
            .then((response) => {
                setReceita(response.data)
                receitasbotao = true
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function showPrice(number) {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        return (
            <>
                <>{priceConverted}</>
            </>
        )
    }

    function receitas() {
        if (receita.ingredientes != null) {
            return (
                <ModalConsumo titulo={receita.titulo} ingredientes={receita.ingredientes} preparo={receita.preparo} img={product.url} />)
        }
            return ""
    }



    function buttonQty() {
        return (
            <>
                <div className="input-group w-100 h-100 ">
                    <button onClick={() =>{ 
                        incrementoQuantyProduto(product)
                        setProductDetail(product.quantidade)
                    }} className="btn btn-outline-dark  btn-green btn-sm" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg> <i className="bi-caret-down" ></i>
                    </button>
                    <input type="text" className="form-control text-center border-dark " value={quanti} />
                    <button onClick={() => {
                        decrementoQuantyProduto(product)
                        setProductDetail(product.quantidade)
                        }} className="btn btn-outline-dark btn-green btn-sm" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                        </svg><i className="bi-caret-up" ></i>
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="container justify-content-between">
                <div className="row mt-3">
                    <div className="col-12 col-xl-6 mx-auto">
                        {/* imagem do produto */}
                        <img className="border img-project  " src={product.url} />
                    </div>
                    {/* LADO DIREITO DA PAGINA  */}
                    <div className="col-12 col-xl-6">
                        <div className="media-body">
                            <div className="preco-avulso margin-price">

                                <Title sub >{product.nome}</Title>
                                <small>Categoria: {product.categoria}</small>
                                <p>Código: {product.id}</p>

                                <div className=" d-flex price-por product-price ">
                                    <p>De:
                                        <small className="product-price de-product"> {showPrice(product.preco + 2)}</small>
                                    </p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <h3 className="mb-2 d-flex text-align justify-content-start title-main">Por: {showPrice(product.preco)}</h3>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={transgenico} className="icons-product" />
                                        <img src={vegano} className="icons-product" />
                                        <img src={gluten} className="icons-product" />

                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <p> Estoque:</p> <p className="ms-1 text-success">{product.statusProduto}</p>
                                </div>
                                <div className="row text-center ">
                                    <div className="col-10 col-sm-4 mb-1">
                                        {/* AREA DO BOTÃO DE QUANTIDADE */}
                                        <div className="row d-grid  mb-3 gy-2">
                                            {buttonQty()}
                                        </div>
                                        {/* FIM  AREA DO BOTÃO DE QUANTIDADE */}
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <button className='btn btn-success btn-lg' onClick={() => addCarrinho(product, quantidadeProduto)}>Adicionar ao Carrinho</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="telamenor mt-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Descrição</Accordion.Header>
                            <Accordion.Body>
                                {product.descricao}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Como guardar</Accordion.Header>
                            <Accordion.Body>
                                {product.armazenamento}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className=" mt-5 ">
                    {receitas()}
                </div>
                <hr />
                {/* Sugestões de outros produtos */}
                <Title label="Aproveite também" />
                <div class="row  ">
                    {/* ********************* item unidade  *********************/}
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price="12,90" />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price="12,90" />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price="12,90" />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price="12,90" />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product