import React from 'react'

export default function OurBlog({ data }) {
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
            <section id="particles-js" className="blog-detail pattern gap" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x530)' }}>
                <div className="container">
                    <div className="blog-detail-data gap no-bottom">
                        <h2 data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>Our Blog</h2>
                        <ul data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                            <li><a className="magic-hover magic-hover__square" href="index.html"><i className="fa-solid fa-house" />home</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><span>/</span>    Our Blog</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-details-one pattern gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-details-one-data our-blog">
                                <div className="img-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <img alt="blog-img" src="https://via.placeholder.com/856x482" />
                                    <div className="message-icon"><i className="fa-solid fa-message" /><span>12</span></div>
                                </div>
                                <div className="marker" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    <h6>December 5, 2023</h6><img alt="girl" src="https://via.placeholder.com/45x45" /><h6>Willimes Marker</h6>
                                </div>
                                <h3>Professionals with a Global Mindset</h3>
                                <p data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw
                                    eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to
                                    otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou
                                    ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta
                                    rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes
                                    You weren’t on any mercy mison this time to this shp before me.</p>
                                <a href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Select Now</a>
                            </div>
                            <div className="blog-details-one-data our-blog">
                                <div className="img-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <img alt="blog-img" src="https://via.placeholder.com/856x482" />
                                    <div className="message-icon"><i className="fa-solid fa-message" /><span>12</span></div>
                                </div>
                                <div className="marker" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    <h6>December 5, 2023</h6><img alt="girl" src="https://via.placeholder.com/45x45" /><h6>Willimes Marker</h6>
                                </div>
                                <h3>Professionals with a Global Mindset</h3>
                                <p data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw
                                    eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to
                                    otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou
                                    ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta
                                    rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes
                                    You weren’t on any mercy mison this time to this shp before me.</p>
                                <a href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Select Now</a>
                            </div>
                            <div className="blog-details-one-data our-blog">
                                <div className="img-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <img alt="blog-img" src="https://via.placeholder.com/856x482" />
                                    <div className="message-icon"><i className="fa-solid fa-message" /><span>12</span></div>
                                </div>
                                <div className="marker" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    <h6>December 5, 2023</h6><img alt="girl" src="https://via.placeholder.com/45x45" /><h6>Willimes Marker</h6>
                                </div>
                                <h3>Professionals with a Global Mindset</h3>
                                <p data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw
                                    eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to
                                    otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou
                                    ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta
                                    rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes
                                    You weren’t on any mercy mison this time to this shp before me.</p>
                                <a href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Select Now</a>
                            </div>
                            <div className="blog-details-one-data our-blog">
                                <div className="img-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <img alt="blog-img" src="https://via.placeholder.com/856x482" />
                                    <div className="message-icon"><i className="fa-solid fa-message" /><span>12</span></div>
                                </div>
                                <div className="marker" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    <h6>December 5, 2023</h6><img alt="girl" src="https://via.placeholder.com/45x45" /><h6>Willimes Marker</h6>
                                </div>
                                <h3>Professionals with a Global Mindset</h3>
                                <p data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw
                                    eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to
                                    otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou
                                    ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta
                                    rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes
                                    You weren’t on any mercy mison this time to this shp before me.</p>
                                <a href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Select Now</a>
                            </div>
                            <div className="blog-details-one-data our-blog">
                                <div className="img-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                    <img alt="blog-img" src="https://via.placeholder.com/856x482" />
                                    <div className="message-icon"><i className="fa-solid fa-message" /><span>12</span></div>
                                </div>
                                <div className="marker" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                                    <h6>December 5, 2023</h6><img alt="girl" src="https://via.placeholder.com/45x45" /><h6>Willimes Marker</h6>
                                </div>
                                <h3>Professionals with a Global Mindset</h3>
                                <p data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                                    ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw
                                    eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to
                                    otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou
                                    ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta
                                    rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes
                                    You weren’t on any mercy mison this time to this shp before me.</p>
                                <a href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Select Now</a>
                            </div>
                            <div className="pagination">
                                <ul>
                                    <li className="prev">
                                        <a href=""> prev</a>
                                    </li>
                                    <li><a href="">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">...</a></li>
                                    <li className="non"><a href="">16</a></li>
                                    <li className="prev">
                                        <a href="">next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <ul className="recent-news" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <li><h4>Recent News</h4></li>
                                <li className="recent-news-data">
                                    <img alt="img" src="https://via.placeholder.com/80x80" />
                                    <div className="recent-data">
                                        <h6>December 5, 2023</h6>
                                        <a className="magic-hover magic-hover__square" href="#">Interview Photographer
                                            Mark Seliger</a>
                                    </div>
                                </li>
                                <li className="recent-news-data">
                                    <img alt="img" src="https://via.placeholder.com/80x80" />
                                    <div className="recent-data">
                                        <h6>December 5, 2023</h6>
                                        <a className="magic-hover magic-hover__square" href="#">Interview Photographer
                                            Mark Seliger</a>
                                    </div>
                                </li>
                                <li className="recent-news-data">
                                    <img alt="img" src="https://via.placeholder.com/80x80" />
                                    <div className="recent-data">
                                        <h6>December 5, 2023</h6>
                                        <a className="magic-hover magic-hover__square" href="#">Interview Photographer
                                            Mark Seliger</a>
                                    </div>
                                </li>
                                <li className="recent-news-data">
                                    <img alt="img" src="https://via.placeholder.com/80x80" />
                                    <div className="recent-data">
                                        <h6>December 5, 2023</h6>
                                        <a className="magic-hover magic-hover__square" href="#">Interview Photographer
                                            Mark Seliger</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="recent-news categories" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <li className="style"><h4>Categories</h4></li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="#">Graphic Design<span>10</span></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="#">Graphic Design<span>10</span></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="#">Ui/Ux Design<span>10</span></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="#">Creative Studio<span>10</span></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="#">Mobile Application<span>10</span></a>
                                </li>
                            </ul>
                            <ul className="recent-news meta-links" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <li className="style"><h4>Meta Links</h4></li>
                                <li>
                                    <div>
                                        <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-caret-right" />Log in</a>
                                        <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-caret-right" /> Entries RSS</a>
                                        <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-caret-right" /> Comments RSS</a>
                                        <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-caret-right" /> WordPress.org</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="recent-news gallery-photos" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <li className="style-two"><h4>Gallery Photos</h4></li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                                <li>
                                    <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/150x150" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/150x150" /></a>
                                </li>
                            </ul>
                            <div className="recent-news subscribe" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <h4>Subscribe Newsletter</h4>
                                <p>Lorem ipsum dolor sit amet, consec tetu
                                    adipisci my nibh euismod</p>
                                <form className="blog">
                                    <input type="text" name="email" placeholder="Enter your email...." />
                                    <button className="magic-hover magic-hover__square button load button--moema button--text-thick button--text-upper button--size-s">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="gap" style={{ backgroundImage: 'url(./img/footer.png)' }}>
                <div className="container">
                    <div className="footer-data">
                        <img alt="log" src="img/orix-logo.png" />
                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi accumsan ipsuy
                            a odio tincdunt ilmauctor Class aptent taciti sociosqu ads Etiam.</p>
                        <ul className="social-media-footer">
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f fb" />Facebook</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter tw" />Twitter</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-vimeo-v vi" />Vimeo</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in in" />Linked In</a></li>
                        </ul>
                        <h6>© 2022 CV Resume<i className="fa-solid fa-heart" />By Winsfolio, All Rights Reserved</h6>
                    </div>
                </div>
            </footer>
        </div>
    );
}
