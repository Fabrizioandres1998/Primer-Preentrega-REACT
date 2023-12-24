import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#"><Link to={"/"}><img src="Panin_Plac-removebg-preview.png" className="brand-icon" /></Link></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link " aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item dropdown d-flex align-items-center">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cocina</a></li>
                                    <li><a className="dropdown-item" href="#">Comedor</a></li>
                                    <li><a className="dropdown-item" href="#">Dormitorio</a></li>
                                </ul>
                            </li>


                            <li className="nav-item cartWidget-container">
                                <div className="nav-link cartWidget-icon" href="#">
                                    <CartWidget />
                                    <span className="cartWidget-number">4</span>
                                </div>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
