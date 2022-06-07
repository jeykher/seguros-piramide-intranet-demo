import React from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import { BsMenuApp } from 'react-icons/bs'; 
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import './Navbar.scss';

import PiramideBrandNavbar from '../PiramideBrandNavbar/PiramideBrandNavbar';

const Navbar = () => {
    return (
        <>
            <nav className="ipos-navbar">
                <Link
                    to="/" 
                    className="ipos-navbar-brand-item"   
                >
                    <PiramideBrandNavbar 
                        width="140"
                        height="8vh"
                    />
                </Link>
                <div className="ipos-navbar-item-group">
    `                <Link 
                        to="/"
                        className="ipos-navbar-item"
                    >
                        <RiDashboardLine 
                            className="ipos-navbar-item-icon"                       
                        />
                        Solicitudes
                    </Link>
                    <Link
                        to="/" 
                        className="ipos-navbar-item"
                    >
                        <BsMenuApp 
                            className="ipos-navbar-item-icon"                        
                        />
                        Aplicaciones
                    </Link>
                    <a href="https://twitter.com/SegPiramide?s=20" className="ipos-navbar-item" target="_blank">
                        <BsTwitter 
                            className="ipos-navbar-social-icon"
                        />
                    </a>
                    <a href="https://es-la.facebook.com/seguros.piramide.7" className="ipos-navbar-item" target="_blank">
                        <FaFacebookSquare
                            className="ipos-navbar-social-icon"
                        />
                    </a>
                    <a href="https://instagram.com/piramidesegurosoficial?igshid=obklqxqunbsw" className="ipos-navbar-item" target="_blank">
                        <BsInstagram 
                            className="ipos-navbar-social-icon"
                        />
                    </a>
                    <div className="ipos-navbar-item">
                        <button className="ipos-navbar-signin-btn">
                            Ingresar
                        </button>
                    </div>`
                </div>
            </nav>
        </>
    );
};

export default Navbar;