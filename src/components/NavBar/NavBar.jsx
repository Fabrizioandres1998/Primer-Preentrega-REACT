import React from 'react' 
import { Link } from 'react-router-dom' 
import CartWidget from '../Cart/CartWidget' 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src="Panin_Plac-removebg-preview.png" className="brand-icon" alt="Brand Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link">Contact us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </div>
                            <ul className="dropdown-menu">
                                <li><Link to={'/categoria/Cocina'} className="dropdown-item">Cocina</Link></li>
                                <li><Link to={'/categoria/Comedor'} className="dropdown-item">Comedor</Link></li>
                                <li><Link to={'/categoria/Dormitorio'} className="dropdown-item">Dormitorio</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item cartWidget-container">
                            <div className="nav-link cartWidget-icon">
                                <CartWidget />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar 
