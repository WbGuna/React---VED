import React from 'react'


function ItemCart(props) {
    let promo = props.promo ? 'text-success' : 'text-center'

    function showPrice(number) {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        return (
            <>
                <h5 className="">{priceConverted}</h5>
            </>
        )
    }


    return (
        <div>
            <li className="list-group-item d-flex justify-content-around lh-sm">
                <div className='col-7 d-flex'>
                    <h5 className={promo}>{props.nome}</h5>
                </div>
                <div className='col-2 d-flex'>
                   
                    {props.cupom
                        ?  <h5 className={promo}>Ativo</h5>
                        :  <h5 className={promo}>{props.quantidade} x</h5>
                    }
                </div>
                <div className='col-3 text-center d-flex align-items-center justify-content-between flex-row'> 
                {props.cupom
                        ? <h4 className='d-flex justify-content-between text-success'> -{props.price}%</h4  >
                        : <h4>{showPrice(props.price)}</h4>
                    }
                </div>
            </li>
        </div>

    )
}

export default ItemCart