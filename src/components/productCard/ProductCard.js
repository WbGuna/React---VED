import './ProductCard.css'
import favorito from '../asserts/imagens/Users_icon/favorito.png'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import CartContext from '../../context/Cart.provider'
import React, { useContext } from 'react'

function ProductCard(props) {

  const { addCarrinho } = useContext(CartContext)

  const showPrice = (number) => {
    let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

    return (
      <>
        <h6 className="font-price">{priceConverted}</h6>
      </>
    )

  }



  return (
    <div className={props.col}>
      <div class="product-card">
        <div class="badge-B  ">{props.status}</div>
        <div class="product-tumb">
          <Link to={props.link}>  <img src={props.img} alt="Abacaxi queen" /></Link>
        </div>
        <div class="product-details align-items-center justify-content-center">

          <h4 className="text-center"> <Link to={props.link}>{props.nome}</Link></h4>
          <p className='text-center'>Peso: {props.peso} kg (aprox)</p>
          <div class="product-bottom-details text-center">
            <div class="product-price">

              {showPrice(props.price)}
            </div>
          </div>
          <div class=" row text-center justify-content-center ">
            <div className="col-12 d-grid gy-2">
              <Button label="Adicionar a Cesta" success click={() => addCarrinho(props.product)} className="btn border btn-success">Adicionar a cesta</Button>
            </div>

          </div>

        </div>
      </div>
    </div >
  )
}

export default ProductCard