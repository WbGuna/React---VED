import React, { useState, createContext } from 'react'
const CartContext = createContext({})


function CartProvider(props) {
    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)
    const [quantidadeCesta, setQuantidadeCesta] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)
    const [valorTotal, setValorTotal] = useState(0) 


    function ValidaCarrinho() {
        let context = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        return context
    }

    const addCarrinho = (item) => {
        let carrinhoLista = []
        if (localStorage.getItem('cart')) {
            let validade = false
            carrinhoLista = JSON.parse(localStorage.getItem('cart'))
            carrinhoLista.map((novo) => {
                if (item.id == novo.id) {
                    novo.quantidade++
                    validade = true
                }
            })
            if (!validade) {
                carrinhoLista.push(item)
            }
        } else {
            carrinhoLista.push(item)
        }
        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)
        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
    }
    
    function incrementoCarrinho(item) {
        let carrinhoLista = []
        if (localStorage.getItem('cart')) {
            let validade = false
            carrinhoLista = JSON.parse(localStorage.getItem('cart'))
            carrinhoLista.map((novo) => {
                if (item.id == novo.id) {
                    novo.quantidade++
                    validade = true
                }
            })
        }
        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)
        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
        total()
    }


    const decrementoCarrinho = (item) => {
        let carrinhoLista = []
        if (localStorage.getItem('cart')) {
            let validade = false
            carrinhoLista = JSON.parse(localStorage.getItem('cart'))
            carrinhoLista.map((novo) => {
                if (item.id == novo.id) {
                    novo.quantidade--

                    validade = true
                }
            })
        }
        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)
        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
        total()
    }

    function incrementoQuantyProduto(item) {
        if (carrinho.find(produto => item.id == produto.id)) {
            incrementoCarrinho(item) 
            console.log("tem no carrinho")
        } else {
            if (item.estoque == item.quantidade) {
                console.log("valor igual ao estue maximo" )
                console.log( item)
            } else {
                console.log("adicionou + 1 ") 
               console.log("adicionou") 
               console.log(item.quantidade++ )
               console.log( item)

            }
        }
    }

    function decrementoQuantyProduto(item) {
        if (carrinho.find(produto => item.id == produto.id)) {
            decrementoCarrinho(item)
        } else {
            if (item.quantidade == 1) {
                console.log("valor igual a 1 " )
            } else {
               console.log("adicionou - 1") 
               console.log(item.quantidade-- )
               console.log( item)
            }
        }
    }

    function total() {
        let totalItem = 0
        const carrinhoList = JSON.parse(localStorage.getItem('cart'))
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        carrinhoList.forEach((value) => {
            console.log(value.preco + " <- preco // quanti -> " + value.quantidade)
            console.log("valor final -> " + (value.preco * value.quantidade))
            totalItem = totalItem + (value.preco * value.quantidade)
            setValorTotal(totalItem)
            localStorage.setItem('valorTotal', JSON.stringify(totalItem))
        })
    }

    const deleteCarrinho = (item) => {
        const remove = carrinho.filter(items => items.id !== item.id)
        localStorage.setItem("cart", JSON.stringify(remove))
        setCarrinho(remove)
        setQtyCarrinho(remove.length)
    }

    const quantidadeCarrinho = () => {
        let quantidade = ValidaCarrinho()
        setQtyCarrinho(quantidade.lenght)
    }

    const listarCarrinho = () => {
        let lista = ValidaCarrinho()
        let valor = localStorage.getItem('valorTotal')
        setCarrinho(lista)
        setValorTotal(valor)
    }

    return (
        <CartContext.Provider
            value={{
                deleteCarrinho, decrementoCarrinho, incrementoCarrinho,
                addCarrinho, quantidadeCarrinho, listarCarrinho,
                carrinho, qtyCarrinho, quantidadeProduto, quantidadeCesta,
                valorTotal, total, incrementoQuantyProduto, decrementoQuantyProduto
            }}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext;
export { CartProvider }
