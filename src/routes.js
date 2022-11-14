import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import PaymentCards from './pages/paymentCards/PaymentCards'
import Checkout from './pages/checkout/Checkout'
import Favorites from "./pages/favorites/Favorites"
import Address from "./pages/address/Address"
import Requests from "./pages/requests/Requests"
import Faq from './pages/faq/Faq'
import PolicySecurity from './pages/policySecurity/PolicySecurity'
import HowToBuy from './pages/howToBuy/HowToBuy'
import AboutUs from './pages/aboutUs/AboutUs'
import PlansVed from './pages/plansVed/PlansVed'
import Suggestion from './pages/suggestion/Suggestion'
import Register  from './pages/register/Register'
import PasswordRecovery from './pages/passwordRecovery/PasswordRecovery'
import PasswordChange from "./pages/passwordChange/PasswordChange"
import Contact from './pages/contact/Contact'
import Test from './pages/test/Test'
import Login from "./pages/login/Login"
import MyAccount from "./pages/myAccount/MyAccount"
import Category from "./pages/category/Category"
import ShippingPolicy from "./pages/shippingPolicy/ShippingPolicy"
import Error404 from './pages/error404/Error'
import Cart from "./pages/cart/Cart"
import OrderDetails from './pages/orderDetails/OrderDetails'
import CompanyPolicy from './pages/companyPolicy/CompanyPolicy' 
import  DetailsOrder from './pages/detailsOrder/DetailsOrder'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/cadastro" component={Register} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout} /> 
            <Route path="/favorites" component={Favorites} />
            <Route path="/address" component={Address} />
            <Route path="/paymentCards" component={PaymentCards} />
            <Route path="/requests" component={Requests} />
            <Route path="/faq" component={Faq}/>
            <Route path="/policySecurity" component={PolicySecurity}/>
            <Route path="/howToBuy" component={HowToBuy}/>
            <Route path="/aboutUS" component={AboutUs}/>
            <Route path="/plansVed" component={PlansVed}/>
            <Route path="/suggestion" component={Suggestion}/>
            <Route path="/register" component={Register} />             
            <Route path="/login" component={Login} exact/>
            <Route path="/orderSuccess/:order" component={OrderDetails} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/passwordChange" component={PasswordChange}/>
            <Route path="/passwordRecovery" component={PasswordRecovery}/>
            <Route path="/register" component={Register} /> 
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/category/:buscar" component={Category} />
            <Route path="/shippingPolicy" component={ShippingPolicy} />  
            <Route path="/DetailsOrder/:order" component={ DetailsOrder} />  
            <Route path="/CompanyPolicy" component={CompanyPolicy} /> 
            <Route path="/test" component={Test} /> 
            <Route component={Error404} />
        </Switch>
    )
}