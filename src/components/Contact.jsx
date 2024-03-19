import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact({ data }) {
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
                        <h2 data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>Contact Us</h2>
                        <ul data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                            <li><a className="magic-hover magic-hover__square" href="index.html"><i className="fa-solid fa-house" />home</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><span>/</span>    Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="address gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                            <div className="service-data">
                                <div className="svg-img">
                                    <i className="icon-phone" />
                                </div>
                                <h5>Phone Number</h5>
                                <a className="magic-hover magic-hover__square" href="callto:(123)4567890">+(123) 456 7890</a><br />
                                <a className="magic-hover magic-hover__square" href="callto:(123)4567890">+(123) 456 7890</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                            <div className="service-data">
                                <div className="svg-img">
                                    <i className="fa-solid fa-envelope" />
                                </div>
                                <h5>Email Address</h5>
                                <a className="magic-hover magic-hover__square" href="mailto:winsfolio@gmail.com">winsfolio@gmail.com</a><br />
                                <a className="magic-hover magic-hover__square" href="mailto:winsfolio@gmail.com">winsfolio@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay={400} data-aos-duration={500}>
                            <div className="service-data">
                                <div className="svg-img">
                                    <i className="icon-location-pin" />
                                </div>
                                <h5>Office Location</h5>
                                <p>123 New York E Block 12670,
                                    Street 2101 USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="hading" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                        <p>Have Question Contact Us?</p>
                        <h2>Love to Hear From You,
                            Get in Touch!</h2>
                    </div>
                    <div className="row">
                        <div className="offset-xl-1 col-xl-10 col-lg-12" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                            <div className="your-name contact" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                <form className="one">
                                    <input type="text" name="YourName" placeholder="Your Name *" />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" name="Email" placeholder="Your Email *" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" name="Phone" placeholder="Phone No *" />
                                        </div>
                                    </div>
                                    <select className="nice-select Advice">
                                        <option>Select Topic</option>
                                        <option>Select Topic 1</option>
                                        <option>Select Topic 2</option>
                                        <option>Select Topic 3</option>
                                        <option>Select Topic 4</option>
                                    </select>
                                    <textarea defaultValue={"Your Message *"} />
                                    <button className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689446.104646556!2d28.705460424349365!3d48.83127549941125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2s!4v1661009847728!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
            <div className="clients-data">
                <div className="container">
                    <div className="row client-logo owl-carousel owl-theme" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
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
                // <footer className="gap" style={{ backgroundImage: 'url(./img/footer.png)' }}>
                //     <div className="container">
                //         <div className="footer-data">
                //             <img alt="log" src="img/orix-logo.png" />
                //             <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi accumsan ipsuy
                //                 a odio tincdunt ilmauctor Class aptent taciti sociosqu ads Etiam.</p>
                //             <ul className="social-media-footer">
                //                 <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f fb" />Facebook</a></li>
                //                 <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter tw" />Twitter</a></li>
                //                 <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-vimeo-v vi" />Vimeo</a></li>
                //                 <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in in" />Linked In</a></li>
                //             </ul>
                //             <h6>© 2022 CV Resume<i className="fa-solid fa-heart" />By Winsfolio, All Rights Reserved</h6>
                //         </div>
                //     </div>
                // </footer>
            }
        </div>
    )
}
