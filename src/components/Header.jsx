import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './pdf/orix.pdf'

export default function Header({ data }) {
    return (
        <header className="two three" id="stickyHeader">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2">
                        <div className="logo-icon">
                            <Link className="magic-hover magic-hover__square" to="/">
                                <img className="light" src="img/orix-logo.png" alt="logo" />
                                <img className="drak" src="img/black-logo.png" alt="logo" />
                            </Link>
                            <a
                                href="javascript:void(0)"
                                className="bar-menu magic-hover magic-hover__square"
                            >
                                <i className="fa-solid fa-bars" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="menu-bar">
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children">
                                        <a className="magic-hover magic-hover__square" href="#">
                                            Home
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to=""
                                                >
                                                    Home 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="index-2"
                                                >
                                                    Home 2{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="index-3"
                                                >
                                                    Home 3{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="index-4"
                                                >
                                                    Home 4 ( Light )
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="index-4-dark"
                                                >
                                                    Home 4 ( Dark )
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a className="magic-hover magic-hover__square" href="#">
                                            Services
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="services"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to='services-details'
                                                >
                                                    Services Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a className="magic-hover magic-hover__square" href="#">
                                            Portfolio
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="portfolio-details-1"
                                                >
                                                    Portfolio 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="portfolio-details-2"
                                                >
                                                    Portfolio 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="portfolio-details-3"
                                                >
                                                    Portfolio 3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a className="magic-hover magic-hover__square" href="#">
                                            Blog
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="our-blog"
                                                >
                                                    Our Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="blog-details-1"
                                                >
                                                    Blog Details 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="blog-details-2"
                                                >
                                                    Blog Details 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a className="magic-hover magic-hover__square" href="#">
                                            Pages
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="about"
                                                >
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="pricing-plans"
                                                >
                                                    Pricing Plans
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="magic-hover magic-hover__square"
                                                    to="error"
                                                >
                                                    404
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="magic-hover magic-hover__square"
                                            to="contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="extras">
                            <a
                                href="javascript:void(0)"
                                id="desktop-menu"
                                className="magic-hover magic-hover__square menu-btn"
                            >
                                <i className="fa-solid fa-bars" />
                            </a>
                            <Link
                                to="./pdf/orix.pdf"
                                className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
                                target="_blank"
                            >
                                <i className="fa-solid fa-download" />
                                Download CV
                            </Link>
                        </div>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-inner ps ps--active-x ps--active-y">
                            <span className="menu-cls-btn">
                                <i className="cls-leftright" />
                                <i className="cls-rightleft" />
                            </span>
                            <div className="contact-info">
                                <a className="magic-hover magic-hover__square" href="index.html">
                                    <img src="img/black-logo.png" alt="logo" />
                                </a>
                                <h5>
                                    I use animation as a third dimension by which to simplify
                                    experiences and kuiding thro each and every interaction.
                                </h5>
                                <ul className="recent-news gallery-photos">
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="https://via.placeholder.com/97x97"
                                            data-fancybox="gallery"
                                        >
                                            <img alt="girl" src="https://via.placeholder.com/97x97" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="e-mail">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div>
                                        <h6>Phone No</h6>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="mailto:username@domain.com"
                                        >
                                            username@domain.com
                                        </a>
                                    </div>
                                </div>
                                <div className="e-mail">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div>
                                        <h6>Email Address</h6>
                                        <a
                                            className="magic-hover magic-hover__square"
                                            href="callto:+(123)4567890"
                                        >
                                            +(123) 456 7890
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-nav" id="mobile-nav" style={{ display: "block" }}>
                <div className="mobile-nav-img-data">
                    <a className="magic-hover magic-hover__square" href="index.html">
                        <img alt="logo" src="img/black-logo.png" />
                    </a>
                </div>
                <ul>
                    <li className="menu-item-has-children">
                        <a
                            className="magic-hover magic-hover__square"
                            href="JavaScript:void(0)"
                        >
                            <i className="icon-home" /> Home
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link className="magic-hover magic-hover__square" to="">
                                    Home 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="index-2"
                                >
                                    Home 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="index-3"
                                >
                                    Home 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="index-4"
                                >
                                    Home 4 ( Light )
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="index-4-dark"
                                >
                                    Home 4 ( Dark )
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="magic-hover magic-hover__square" to="about">
                            <i className="icon-user" /> About
                        </Link>
                    </li>
                    <li className="menu-item-has-children">
                        <a
                            className="magic-hover magic-hover__square"
                            href="JavaScript:void(0)"
                        >
                            <i className="icon-briefcase" /> Portfolio
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="portfolio-details-1"
                                >
                                    Portfolio Details 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="portfolio-details-2"
                                >
                                    Portfolio Details 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="portfolio-details-3"
                                >
                                    Portfolio Details 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a
                            className="magic-hover magic-hover__square"
                            href="JavaScript:void(0)"
                        >
                            <i className="icon-layers" />
                            Blog
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="our-blog"
                                >
                                    Our Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="our-blog"
                                >
                                    Blog Details 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="our-blog"
                                >
                                    Blog Details 2
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a
                            className="magic-hover magic-hover__square"
                            href="JavaScript:void(0)"
                        >
                            <i className="icon-folder" /> Pages
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="services"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="services-details"
                                >
                                    Services Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="magic-hover magic-hover__square"
                                    to="pricing-plans"
                                >
                                    Pricing Plans
                                </Link>
                            </li>
                            <li>
                                <Link className="magic-hover magic-hover__square" to="error">
                                    404
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="magic-hover magic-hover__square" to="contact">
                            <i className="icon-envelope-open" /> Contact
                        </Link>
                    </li>
                </ul>
                <a
                    className="magic-hover magic-hover__square"
                    href="JavaScript:void(0)"
                    id="res-cross"
                />
                <a
                    href='/orix.pdf'
                    className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
                    target="_blank"
                >
                    <i className="fa-solid fa-download" />
                    Download CV
                </a>
            </div>
        </header>
    )
}
