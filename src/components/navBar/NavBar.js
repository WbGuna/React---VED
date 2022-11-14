import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { baseHome } from '../../environments'

function NavBar(props) {



    return (
        <>
            <div className="back container-fluid" >
                <Navbar className=" nav d-flex justify-content-around back container-fluid" >

                    <Nav.Link className="nav-hover"><Link to="/category/novidade">  Novidades</Link></Nav.Link>
                    <Nav.Link className="nav-hover"><Link to="/plansVed">   Planos </Link> </Nav.Link>
                    <NavDropdown title="Categorias" className="nav-hover">
                        <NavDropdown.Item > <Link to="/category/1"> <p className="font"> Frutas </p> </Link> </NavDropdown.Item>
                        <NavDropdown.Item > <Link to="/category/2"> <p className="font">  Verduras  </p> </Link> </NavDropdown.Item>
                        <NavDropdown.Item > <Link to="/category/4"> <p className="font"> Mercearia </p> </Link> </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/aboutUS" className="nav-hover">Sobre Nós</Nav.Link>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar