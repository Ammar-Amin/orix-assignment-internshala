import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogDetails2({ data }) {
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
                            Blog Details
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
                                    <span>/</span> Our Blog
                                </a>
                            </li>
                            <li>
                                <a className="magic-hover magic-hover__square" href="#">
                                    <span>/</span> Blog Details 2
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-details-one gap">
                <div className="container">
                    <div
                        className="blog-details-one-data"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                    >
                        <div className="img-data">
                            <img alt="blog-img" src="https://via.placeholder.com/1296x633" />
                            <div className="message-icon">
                                <i className="fa-solid fa-message" />
                                <span>12</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-xl-1 col-lg-10">
                            <div className="blog-details-one-data blog-two">
                                <span>Digital Marketing, Marketing</span>
                                <h3>Professionals with a Global Mindset</h3>
                                <div className="marker">
                                    <img alt="girl" src="https://via.placeholder.com/45x45" />
                                    <div>
                                        <span>December 5, 2023</span>
                                        <h6>Willimes Marker</h6>
                                    </div>
                                </div>
                                <p data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
                                    tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
                                    fruitcake tart caramels marzipan. Brownie I love chocolate that
                                    bar sesliquorice. I love to otsie roll dragée bonbon croisnt.
                                    Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet
                                    sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash
                                    Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels
                                    marzipan Brownie I love chocolate bar. Cake I love liquorice n’t
                                    act so surprised, Your Highnes You weren’t on any mercy mison this
                                    time to this shp before me.
                                    <br />
                                    <br />
                                    Tighten your grip, Tarkin, the more star systems will slip through
                                    your fingers.Still, got a lot of spirit what do you think? What!?
                                    I don’t know what you’re talking about. I am a member of the
                                    Imperidiplomatic mission to Alderaan good is a reward if you aint
                                    tas around to use it Besides, attackin station ain’t my idea of
                                    cou rage. It’s more like suicide.
                                </p>
                                <div
                                    className="blog-quote"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <div className="quote-img">
                                        <img alt="quote" src="img/quote-1.png" />
                                        <div>
                                            <h4>
                                                “ If you've got an idea, start today. There's no better time
                                                than now to get going. That doesn't mean quit your job ”
                                            </h4>
                                            <span>Writing by Jackson Doe</span>
                                        </div>
                                    </div>
                                </div>
                                <p data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
                                    jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
                                    biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
                                    tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
                                    sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
                                    oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
                                    chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
                                    liquorice oat cake biscuit jesms tiramis.
                                </p>
                                <ul
                                    className="time-number"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <li>Motivation and encouragement from time to time</li>
                                    <li>1000 motivational quotes in the database</li>
                                    <li>
                                        If you don’t need either of these at the moment, you certainly
                                        have friends
                                    </li>
                                    <li>You and help uplift your day.</li>
                                    <li>
                                        Provide a motivational quote for you as you place your head on
                                        the pillow
                                    </li>
                                </ul>
                                <div className="row">
                                    <div
                                        className="col-lg-8"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={300}
                                    >
                                        <div className="img-large hover06">
                                            <figure>
                                                <img
                                                    alt="blog-2"
                                                    src="https://via.placeholder.com/709x380"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                        data-aos-duration={400}
                                    >
                                        <div className="img-large hover06">
                                            <figure>
                                                <img
                                                    alt="blog-2"
                                                    src="https://via.placeholder.com/343x380"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-12"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={300}
                                    >
                                        <div className="img-large hover06">
                                            <img
                                                alt="blog-img"
                                                src="https://via.placeholder.com/1076x380"
                                            />
                                            <a
                                                data-fancybox=""
                                                href="https://www.youtube.com/watch?v=Vr3h5X9kmUo"
                                            >
                                                <i className="fa-solid fa-play" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p
                                    className="one"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    Tighten your grip, Tarkin, the more star systems will slip through
                                    your fingers.Still, got a lot of spirit what do you think? What!?
                                    I don’t know what you’re talking about. I am a member of the
                                    Imperidiplomatic mission to Alderaan good is a reward if you aint
                                    tas around to use it Besides, attackin station ain’t my idea of
                                    cou rage. It’s more like suicide.
                                </p>
                                <div className="row align-items-center blog-gap">
                                    <div
                                        className="col-lg-8"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={300}
                                    >
                                        <p>
                                            ipsum dolor sit amet soufflé. I love liquorice oat cake
                                            biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                                            tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                                            chocolate that bar sesliquorice. I love to otsie roll dragée
                                            bonbon croisnt. Chupa chups lo ream sesame snaps jelly
                                            tiramiipsum dolor sit am et souffl liquorice oat cake biscuit
                                            jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                                            Jelly-o fruitc ake tart caramels marzipan.
                                        </p>
                                    </div>
                                    <div
                                        className="col-lg-4"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                        data-aos-duration={400}
                                    >
                                        <img
                                            className="two"
                                            alt="blog-img"
                                            src="https://via.placeholder.com/243x250"
                                        />
                                    </div>
                                </div>
                                <p data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    you’re talking about. I am a member of the Imperidiplomatic
                                    mission to Alderaan good is a reward if you aint tas around to use
                                    it Besides, attackin station ain’t my idea of courage. It’s more
                                    like suicide.
                                </p>
                                <div
                                    className="posted"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <ul
                                        className="tage"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={300}
                                    >
                                        <li>
                                            <h4>Posted In :</h4>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="#">
                                                Graphic Designer
                                            </a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="#">
                                                Website Design
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="social-media-icon blog-two">
                                        <li>
                                            <a className="f" href="">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="in" href="">
                                                <i className="fa-brands fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="t" href="">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="post"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <div className="previews">
                                        <h4>Whether you get knocked...</h4>
                                        <a className="magic-hover magic-hover__square" href="#">
                                            <i className="fa-solid fa-angle-left" />
                                            Previews Post
                                        </a>
                                    </div>
                                    <div className="previews next">
                                        <h4>It’s whether you get up...</h4>
                                        <a className="magic-hover magic-hover__square" href="#">
                                            next Post
                                            <i className="fa-solid fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="about-author"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <img alt="girl" src="https://via.placeholder.com/150x150" />
                                    <div>
                                        <h3 className="two">
                                            About Author<span>Graphic Designer</span>
                                        </h3>
                                        <h6>
                                            Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler
                                            neque in Nam vitae urnasodales neque in faucibus.
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="comment"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <h2>02 Comments</h2>
                                    <ul>
                                        <li className="one-comment">
                                            <img alt="girl" src="https://via.placeholder.com/120x120" />
                                            <div>
                                                <a className="magic-hover magic-hover__square" href="#">
                                                    REPLY
                                                </a>
                                                <h5>
                                                    Nolwar Disoza<span>10 months ago</span>
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipis Vivamus
                                                    sceler neque in Nam vitae urnasodales neque in faucibus.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="one-comment reply">
                                            <img alt="girl" src="https://via.placeholder.com/120x120" />
                                            <div>
                                                <a className="magic-hover magic-hover__square" href="#">
                                                    REPLY
                                                </a>
                                                <h5>
                                                    Thomas Walkar<span>10 months ago</span>
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipis Vivamus
                                                    sceler neque in Nam vitae urnasodales neque in faucibus.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="leave"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <h2>Leave a Comment</h2>
                                    <form className="one">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <input
                                                    type="text"
                                                    name="Email"
                                                    placeholder="Complete Name"
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    type="text"
                                                    name="Phone"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <input
                                                    type="text"
                                                    name="YourName"
                                                    placeholder="Phone No (Optional)"
                                                />
                                            </div>
                                        </div>
                                        <textarea placeholder="Your Comment" defaultValue={""} />
                                        <button className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
