import './Error.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Title from '../../components/title/Title'


function Error404() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <Title label="Oops!"/>
                            
                            <h3>404 Not Found</h3>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <Link to='/' className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home"></span>
                                    Take Me Home
                                </Link>
                                <Link to="/contact" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span>
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error404