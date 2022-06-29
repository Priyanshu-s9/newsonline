import React, { Component } from 'react'
import { Link } from "react-router-dom";

const Navbar= ()=> {

    
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                            <h1 className="navbar-brand" to="/">News On-Desktop</h1>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <h2 className="nav-item"><Link className="nav-link" to="/general">General</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/business">Business</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/science">Science</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/health">Health</Link></h2>
                            <h2 className="nav-item"><Link className="nav-link" to="/education">Education</Link></h2>
                             
                        </ul>
                        </div>  
                    </div>
                    </nav>
            </div>
        )
        }

export default Navbar