import React from 'react'

export default function About({ data }) {
    return (
        <div className="menu-layer">
            {/* loader start*/}
            <div className="page-loader">
                <div className="spinner">
                    <p>loading...</p>
                    <div className="spinner-area spinner-first" />
                    <div className="spinner-area spinner-second" />
                    <div className="spinner-area spinner-third" />
                </div>
            </div>
            {/* loader end*/}
            {
                // <header className="two three" id="stickyHeader">
                //     <div className="container">
                //         <div className="row align-items-center">
                //             <div className="col-xl-2">
                //                 <div className="logo-icon">
                //                     <Link className="magic-hover magic-hover__square" to="/">
                //                         <img className="light" src="img/orix-logo.png" alt="logo" />
                //                         <img className="drak" src="img/black-logo.png" alt="logo" />
                //                     </Link>
                //                     <Link
                //                         to=""
                //                         className="bar-menu magic-hover magic-hover__square"
                //                     >
                //                         <i className="fa-solid fa-bars" />
                //                     </Link>
                //                 </div>
                //             </div>
                //             <div className="col-xl-7">
                //                 <div className="menu-bar">
                //                     <nav>
                //                         <ul>
                //                             <li className="menu-item-has-children">
                //                                 <a className="magic-hover magic-hover__square" href="#">
                //                                     Home
                //                                 </a>
                //                                 <ul>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="index"
                //                                         >
                //                                             Home 1
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="index-2"
                //                                         >
                //                                             Home 2{" "}
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="index-3"
                //                                         >
                //                                             Home 3{" "}
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="index-4"
                //                                         >
                //                                             Home 4 ( Light )
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="index-4-dark"
                //                                         >
                //                                             Home 4 ( Dark )
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </li>
                //                             <li className="menu-item-has-children">
                //                                 <a className="magic-hover magic-hover__square" href="#">
                //                                     Services
                //                                 </a>
                //                                 <ul>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             href="services.html"
                //                                         >
                //                                             Services
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             href="services-details.html"
                //                                         >
                //                                             Services Details
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </li>
                //                             <li className="menu-item-has-children">
                //                                 <a className="magic-hover magic-hover__square" href="#">
                //                                     Portfolio
                //                                 </a>
                //                                 <ul>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="portfolio-details-1"
                //                                         >
                //                                             Portfolio 1
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="portfolio-details-2"
                //                                         >
                //                                             Portfolio 2
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="portfolio-details-3"
                //                                         >
                //                                             Portfolio 3
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </li>
                //                             <li className="menu-item-has-children">
                //                                 <a className="magic-hover magic-hover__square" href="#">
                //                                     Blog
                //                                 </a>
                //                                 <ul>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="our-blog"
                //                                         >
                //                                             Our Blog
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="blog-details-1"
                //                                         >
                //                                             Blog Details 1
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="blog-details-2"
                //                                         >
                //                                             Blog Details 2
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </li>
                //                             <li className="menu-item-has-children">
                //                                 <a className="magic-hover magic-hover__square" href="#">
                //                                     Pages
                //                                 </a>
                //                                 <ul>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="about"
                //                                         >
                //                                             About
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="pricing-plans"
                //                                         >
                //                                             Pricing Plans
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link
                //                                             className="magic-hover magic-hover__square"
                //                                             to="error"
                //                                         >
                //                                             404
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </li>
                //                             <li>
                //                                 <Link
                //                                     className="magic-hover magic-hover__square"
                //                                     to="contact"
                //                                 >
                //                                     Contact
                //                                 </Link>
                //                             </li>
                //                         </ul>
                //                     </nav>
                //                 </div>
                //             </div>
                //             <div className="col-xl-3">
                //                 <div className="extras">
                //                     <a
                //                         href=""
                //                         id="desktop-menu"
                //                         className="magic-hover magic-hover__square menu-btn"
                //                     >
                //                         <i className="fa-solid fa-bars" />
                //                     </a>
                //                     <Link
                //                         to="./pdf/orix.pdf"
                //                         className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
                //                         target="_blank"
                //                     >
                //                         <i className="fa-solid fa-download" />
                //                         Download CV
                //                     </Link>
                //                 </div>
                //             </div>
                //             <div className="menu-wrap">
                //                 <div className="menu-inner ps ps--active-x ps--active-y">
                //                     <span className="menu-cls-btn">
                //                         <i className="cls-leftright" />
                //                         <i className="cls-rightleft" />
                //                     </span>
                //                     <div className="contact-info">
                //                         <a className="magic-hover magic-hover__square" href="index.html">
                //                             <img src="img/black-logo.png" alt="logo" />
                //                         </a>
                //                         <h5>
                //                             I use animation as a third dimension by which to simplify
                //                             experiences and kuiding thro each and every interaction.
                //                         </h5>
                //                         <ul className="recent-news gallery-photos">
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                             <li>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="https://via.placeholder.com/97x97"
                //                                     data-fancybox="gallery"
                //                                 >
                //                                     <img alt="girl" src="https://via.placeholder.com/97x97" />
                //                                 </a>
                //                             </li>
                //                         </ul>
                //                         <div className="e-mail">
                //                             <div className="icon-box">
                //                                 <i className="fa-solid fa-envelope" />
                //                             </div>
                //                             <div>
                //                                 <h6>Phone No</h6>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="mailto:username@domain.com"
                //                                 >
                //                                     username@domain.com
                //                                 </a>
                //                             </div>
                //                         </div>
                //                         <div className="e-mail">
                //                             <div className="icon-box">
                //                                 <i className="fa-solid fa-phone" />
                //                             </div>
                //                             <div>
                //                                 <h6>Email Address</h6>
                //                                 <a
                //                                     className="magic-hover magic-hover__square"
                //                                     href="callto:+(123)4567890"
                //                                 >
                //                                     +(123) 456 7890
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="mobile-nav" id="mobile-nav" style={{ display: "block" }}>
                //         <div className="mobile-nav-img-data">
                //             <a className="magic-hover magic-hover__square" href="index.html">
                //                 <img alt="logo" src="img/black-logo.png" />
                //             </a>
                //         </div>
                //         <ul>
                //             <li className="menu-item-has-children">
                //                 <a
                //                     className="magic-hover magic-hover__square"
                //                     href=""
                //                 >
                //                     <i className="icon-home" /> Home
                //                 </a>
                //                 <ul className="sub-menu">
                //                     <li>
                //                         <Link className="magic-hover magic-hover__square" to="/">
                //                             Home 1
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="index-2"
                //                         >
                //                             Home 2
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="index-3"
                //                         >
                //                             Home 3
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="index-4"
                //                         >
                //                             Home 4 ( Light )
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="index-4-dark"
                //                         >
                //                             Home 4 ( Dark )
                //                         </Link>
                //                     </li>
                //                 </ul>
                //             </li>
                //             <li>
                //                 <Link className="magic-hover magic-hover__square" to="about">
                //                     <i className="icon-user" /> About
                //                 </Link>
                //             </li>
                //             <li className="menu-item-has-children">
                //                 <a
                //                     className="magic-hover magic-hover__square"
                //                     href=""
                //                 >
                //                     <i className="icon-briefcase" /> Portfolio
                //                 </a>
                //                 <ul className="sub-menu">
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="portfolio-details-1"
                //                         >
                //                             Portfolio Details 1
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="portfolio-details-2"
                //                         >
                //                             Portfolio Details 2
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="portfolio-details-3"
                //                         >
                //                             Portfolio Details 3
                //                         </Link>
                //                     </li>
                //                 </ul>
                //             </li>
                //             <li className="menu-item-has-children">
                //                 <a
                //                     className="magic-hover magic-hover__square"
                //                     href=""
                //                 >
                //                     <i className="icon-layers" />
                //                     Blog
                //                 </a>
                //                 <ul className="sub-menu">
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="our-blog"
                //                         >
                //                             Our Blog
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="our-blog"
                //                         >
                //                             Blog Details 1
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="our-blog"
                //                         >
                //                             Blog Details 2
                //                         </Link>
                //                     </li>
                //                 </ul>
                //             </li>
                //             <li className="menu-item-has-children">
                //                 <a
                //                     className="magic-hover magic-hover__square"
                //                     href=""
                //                 >
                //                     <i className="icon-folder" /> Pages
                //                 </a>
                //                 <ul className="sub-menu">
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="services"
                //                         >
                //                             Services
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="services-details"
                //                         >
                //                             Services Details
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link
                //                             className="magic-hover magic-hover__square"
                //                             to="pricing-plans"
                //                         >
                //                             Pricing Plans
                //                         </Link>
                //                     </li>
                //                     <li>
                //                         <Link className="magic-hover magic-hover__square" to="error">
                //                             404
                //                         </Link>
                //                     </li>
                //                 </ul>
                //             </li>
                //             <li>
                //                 <Link className="magic-hover magic-hover__square" to="contact">
                //                     <i className="icon-envelope-open" /> Contact
                //                 </Link>
                //             </li>
                //         </ul>
                //         <a
                //             className="magic-hover magic-hover__square"
                //             href=""
                //             id="res-cross"
                //         />
                //         <Link
                //             to="pdf/orix.pdf"
                //             className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
                //             target="_blank"
                //         >
                //             <i className="fa-solid fa-download" />
                //             Download CV
                //         </Link>
                //     </div>
                // </header>
            }
            <section
                id="particles-js"
                className="blog-detail pattern gap"
                style={{ backgroundImage: "url(https://via.placeholder.com/1920x530)" }}
            >
                <div className="container">
                    <div className="blog-detail-data gap no-bottom">
                        <h2 data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                            About Us
                        </h2>
                        <ul data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                            <li>
                                <a className="magic-hover magic-hover__square" href="index.html">
                                    <i className="fa-solid fa-house" />
                                    home
                                </a>
                            </li>
                            <li>
                                <a className="magic-hover magic-hover__square" href="#">
                                    <span>/</span> About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="about" className="about gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="about-mee">
                                <h2>About Me</h2>
                                <p>I like creating a cool design project.</p>
                                <ul className="social-media-icon">
                                    <li>
                                        <a
                                            href="pdf/orix.pdf"
                                            className="button button--moema button--text-thick button--text-upper button--size-s"
                                            target="_blank"
                                        >
                                            <i className="fa-solid fa-download" />
                                            Download CV
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="f magic-hover magic-hover__square"
                                            href=""
                                        >
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="in magic-hover magic-hover__square"
                                            href=""
                                        >
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="t magic-hover magic-hover__square"
                                            href=""
                                        >
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="age">
                                    <li>
                                        <h6>
                                            Age:<span>29</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            Residence:<span>USA</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            Address:<span>88 Some Street, Some Town</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            E-mail:<span>email@example.com</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            Phone:<span>+0123 123 456 789</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            Freelance:<span>Available</span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="progress-data">
                                <p>
                                    Vestibulum vitae lorim tellus nec dui dictum lorim viverra ac,
                                    place uilm rat Lorse ipsom uilme umes acdictm Vesti itae lorim
                                    tellus nec dui dictum lorim viverra a eros ac, pl rat Lorse ipsom
                                    lorimes aul erdum. erdum. Vestibulum vi rat Lorse ipsom lorimes
                                    aul erdum. erdum.{" "}
                                </p>
                                <img alt="sine" src="img/sine.png" />
                                <div className="progress-bara-data">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="home-one-progress">
                                                <div className="count-time">
                                                    <h2
                                                        className="timer count-title count-number"
                                                        data-to={50}
                                                        data-speed={2000}
                                                    >
                                                        50
                                                    </h2>
                                                    <span>%</span>
                                                </div>
                                                <h5>Graphic Design</h5>
                                                <div className="meter cadetblue">
                                                    <span data-progress={50} style={{ width: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="home-one-progress">
                                                <div className="count-time">
                                                    <h2
                                                        className="timer count-title count-number"
                                                        data-to={75}
                                                        data-speed={2000}
                                                    >
                                                        75
                                                    </h2>
                                                    <span>%</span>
                                                </div>
                                                <h5>Development</h5>
                                                <div className="meter cadetblue">
                                                    <span data-progress={75} style={{ width: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="home-one-progress">
                                                <div className="count-time">
                                                    <h2
                                                        className="timer count-title count-number"
                                                        data-to={38}
                                                        data-speed={2000}
                                                    >
                                                        38
                                                    </h2>
                                                    <span>%</span>
                                                </div>
                                                <h5>Marketing Ideas</h5>
                                                <div className="meter cadetblue">
                                                    <span data-progress={38} style={{ width: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="home-one-progress">
                                                <div className="count-time">
                                                    <h2
                                                        className="timer count-title count-number"
                                                        data-to={63}
                                                        data-speed={2000}
                                                    >
                                                        63
                                                    </h2>
                                                    <span>%</span>
                                                </div>
                                                <h5>Web Management</h5>
                                                <div className="meter cadetblue">
                                                    <span data-progress={63} style={{ width: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-resume gap">
                <div className="container">
                    <div
                        className="hading"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                    >
                        <img alt="dots" src="img/dots.png" />
                        <p>Professional Experience</p>
                        <h2>My Resume</h2>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="resume-data">
                                <div className="headings resume">
                                    <h3>Education</h3>
                                </div>
                                <div className="education">
                                    <h5>2012 to 2014</h5>
                                    <p>Bachelor Degree</p>
                                    <div className="studies">
                                        <h6>University of Studies</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                                <div className="education">
                                    <h5>2010 to 2012</h5>
                                    <p>Master Degree</p>
                                    <div className="studies">
                                        <h6>University of South Education</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                                <div className="education end">
                                    <h5>2008 to 2010</h5>
                                    <p>Advanced Post Graduate</p>
                                    <div className="studies">
                                        <h6>University of South Education</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="resume-data">
                                <div className="headings resume">
                                    <h3>Experience</h3>
                                </div>
                                <div className="education">
                                    <h5>2018 to Present</h5>
                                    <p>Graphic Designer / Web Designer</p>
                                    <div className="studies">
                                        <h6>Envato Studio</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                                <div className="education">
                                    <h5>2016 to 2018</h5>
                                    <p>Junior Ui/Ux Designer</p>
                                    <div className="studies">
                                        <h6>Envato Studio</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                                <div className="education end">
                                    <h5>20014 to 2016</h5>
                                    <p>Senior Ui/Ux Designer</p>
                                    <div className="studies">
                                        <h6>Envato Studio</h6>
                                        <p>
                                            Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi
                                            dinm indolo sum indolor st ailmes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clients-data">
                <div className="container">
                    <div
                        className="row client-logo owl-carousel owl-theme"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                    >
                        <div className="col-lg-3 item">
                            <div className="clients-color">
                                <img alt="clients" src="https://via.placeholder.com/278x128" />
                            </div>
                        </div>
                        <div className="col-lg-3 item">
                            <div className="clients-color">
                                <img alt="clients" src="https://via.placeholder.com/278x128" />
                            </div>
                        </div>
                        <div className="col-lg-3 item">
                            <div className="clients-color">
                                <img alt="clients" src="https://via.placeholder.com/278x128" />
                            </div>
                        </div>
                        <div className="col-lg-3 item">
                            <div className="clients-color">
                                <img alt="clients" src="https://via.placeholder.com/278x128" />
                            </div>
                        </div>
                        <div className="col-lg-3 item">
                            <div className="clients-color">
                                <img alt="clients" src="https://via.placeholder.com/278x128" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                // <footer className="gap" style={{ backgroundImage: "url(./img/footer.png)" }}>
                //     <div className="container">
                //         <div className="footer-data">
                //             <img alt="log" src="img/orix-logo.png" />
                //             <p>
                //                 Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi
                //                 accumsan ipsuy a odio tincdunt ilmauctor Class aptent taciti sociosqu
                //                 ads Etiam.
                //             </p>
                //             <ul className="social-media-footer">
                //                 <li>
                //                     <a className="magic-hover magic-hover__square" href="#">
                //                         <i className="fa-brands fa-facebook-f fb" />
                //                         Facebook
                //                     </a>
                //                 </li>
                //                 <li>
                //                     <a className="magic-hover magic-hover__square" href="#">
                //                         <i className="fa-brands fa-twitter tw" />
                //                         Twitter
                //                     </a>
                //                 </li>
                //                 <li>
                //                     <a className="magic-hover magic-hover__square" href="#">
                //                         <i className="fa-brands fa-vimeo-v vi" />
                //                         Vimeo
                //                     </a>
                //                 </li>
                //                 <li>
                //                     <a className="magic-hover magic-hover__square" href="#">
                //                         <i className="fa-brands fa-linkedin-in in" />
                //                         Linked In
                //                     </a>
                //                 </li>
                //             </ul>
                //             <h6>
                //                 © 2022 CV Resume
                //                 <i className="fa-solid fa-heart" />
                //                 By Winsfolio, All Rights Reserved
                //             </h6>
                //         </div>
                //     </div>
                // </footer>
            }
        </div>
    )
}
