import { CartProvider } from './Cart.provider'
import { ClientProvider } from './Client.provider'


function Contexts(props) {

    return (
        <ClientProvider>
            <CartProvider>
                {props.children}
            </CartProvider>
        </ClientProvider>

    )
}

export default Contexts