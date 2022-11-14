import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/Cart.provider'

function ItemBasket(props) {
    const [valorTotal, setValorTotal] = useState(props.valor * props.quantidadeProduto)
    const { incrementoCarrinho, decrementoCarrinho, deleteCarrinho } = useContext(CartContext)

    const quantidade = props.quantidade ? props.quantidade : 1

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
            <li className="list-group-item py-3">
                <div className="row g-3">
                    <div className=" col-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center">
                        <Link to={`/product/${props.id}`}>
                            <img className="mr-3  imgfruta" src={props.img} />
                        </Link>
                    </div>
                    <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                        <h4>
                            <Link to={`/product/${props.id}`} className="text-decoration-none text-success">
                                {props.nome}
                                
                            </Link>
                        </h4>
                        <h5>
                            {props.descricao}
                        </h5>
                    </div>
                    <div className="col-12 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                        <div className="text-end mt-2 ">
                            <div className="input-group w-100 h-100 ">
                                <button onClick={() => incrementoCarrinho(props.product)} className="btn btn-outline-dark  btn-green btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg> <i className="bi-caret-down" ></i>
                                </button>
                                <input type="text" className="form-control text-center border-dark " value={props.qty} />
                                <button onClick={() =>  decrementoCarrinho(props.product)} className="btn btn-outline-dark btn-green btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                    </svg> <i className="bi-caret-up" ></i>
                                </button>
                                <button onClick={() => deleteCarrinho(props.product)} className="btn btn-outline-danger border-dark btn-red btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>

                            </div>
                            <small className="text-secondary">Valor Unitário: {showPrice(props.valor)} </small><br />
                            <small className="text-secondary">Valor Total: {showPrice(props.valor * props.qty)}</small><br />
                        </div>
                    </div>
                </div>
            </li>

        </>
    )
}

export default ItemBasket
