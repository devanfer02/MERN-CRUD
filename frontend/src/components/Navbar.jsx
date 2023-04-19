import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASEURL } from '../js/config';

export const Navbar = () => {
    return (
        <header className="position-relative" style={{marginLeft: '30px', marginTop: '10px'}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" id="nav">
                    <a className="navbar-brand" href={`${BASEURL}home`}>MERN CRUD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link custom-nav" href={`${BASEURL}`} style={{marginBottom: '7px'}}>List Students</a>
                            <a className="nav-link custom-nav" href={`${BASEURL}add`} style={{marginBottom: '7px'}}>Add Student</a>
                            <a className="nav-link custom-nav" href={`${BASEURL}about`} style={{marginBottom: '7px'}}>About</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header> 
    )
}
