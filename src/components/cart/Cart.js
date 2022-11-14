import './Cart.css'
import ItemCart from '../itemCardCheckout/itemCartCheckout'
import React from 'react'

function Cart(props) {

    function showPrice(number) {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        return (
            <>
                <h4 className="">{priceConverted}</h4>
            </>
        )
    }

    function listar() {
        return props.cart.map((item) => {
            return (
                <ItemCart key={item.id} nome={item.nomeProduto} quantidade={item.quantidade} price={item.preco} />
            )
        })
    }

    function listarCupom() {
        if (props.cupomValid) {
            return (
                <ItemCart promo cupom key={props.cupom.id} nome={props.cupom.descricao} descricao='Cupom Promo Ved' price={props.cupom.porcentagemDesconto} />
            )
        } else {
            <></>
        }
    }

    function calcularTotal() {
        let valorT = props.valor
        let porcento = props.cupom.porcentagemDesconto ? props.cupom.porcentagemDesconto : 0
        let valorFinal = ((porcento / 100) * valorT)
        let frr = props.frete
        props.valort(valorT - valorFinal + frr)
        return (
            <>{showPrice(valorT - valorFinal + frr)} </>

        )
    }


    return (
        <>
            <div>
                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <span>Seu carrinho</span>
                    <span className="badge bg-success rounded-pill">{props.quant}</span>
                </h4>
                <div className="d-flex flex-row border">
                    <div className='col-7 d-flex'>
                        <h5 >Produtos</h5>
                    </div>
                    <div className='col-2 d-flex'>
                        <h5 >Quant.</h5>
                    </div>
                    <div className='col-3  '>
                        <h5>Val. Unitário</h5>
                    </div>
                </div>
                <ul className="list-group mb-3">

                    {listar()}
                    {listarCupom()}
                    {/* <ItemCart  key={99} nome={props.frete.tipoFrete} descricao='Cupom Promo Ved' price={props.cupom.porcentagemDesconto} />  */}
                    <div>
                        <li className="list-group-item list1 d-flex justify-content-between lh-sm">
                            <div>
                                <h5 className="my-0">Total + Frete <small>(R${props.frete})</small> </h5>
                            </div>
                            <span className="">{calcularTotal()}</span>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Cart