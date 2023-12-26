import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand"  ><Link to={"/"}><img src="Panin_Plac-removebg-preview.png" className="brand-icon" /></Link></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link " aria-current="page">About</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link">Contact us</a>
                            </li>
                            <li className="nav-item dropdown d-flex align-items-center">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </div>
                                <ul className="dropdown-menu">
                                    <Link to={'/categoria/Cocina'}><li><div className="dropdown-item">Cocina</div></li></Link>
                                    <Link to={'/categoria/Comedor'}>   <li><div className="dropdown-item">Comedor</div></li></Link>
                                    <Link to={'/categoria/Dormitorio'}>   <li><div className="dropdown-item">Dormitorio</div></li></Link>
                                </ul>
                            </li>

                            <li className="nav-item cartWidget-container">
                                <div className="nav-link cartWidget-icon">
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
