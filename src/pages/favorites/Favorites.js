import './Favorites.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import ProductCard from '../../components/productCard/ProductCard'
import Title from '../../components/title/Title'


function Favorites() {

    return (
        <> 
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>
                    <div class="col-12 col-md-9 order-md-last  mb-3">
                        <Title label = "Meus Favoritos"/>
                        {/* inicio produtos */}
                        <div class="row">
                        <h2>0 Favoritos </h2>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )


}

export default Favorites;