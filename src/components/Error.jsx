import React from 'react'

export default function Error() {
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
      <header className="two three" id="stickyHeader">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2">
              <div className="logo-icon">
                <a className="magic-hover magic-hover__square" href="index.html">
                  <img className="light" src="img/orix-logo.png" alt="logo" />
                  <img className="drak" src="img/black-logo.png" alt="logo" />
                </a>
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
                          <a
                            className="magic-hover magic-hover__square"
                            href="index.html"
                          >
                            Home 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="index-2.html"
                          >
                            Home 2{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="index-3.html"
                          >
                            Home 3{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="index-4.html"
                          >
                            Home 4 ( Light )
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="index-4-dark.html"
                          >
                            Home 4 ( Dark )
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a className="magic-hover magic-hover__square" href="#">
                        Services
                      </a>
                      <ul>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="services.html"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="services-details.html"
                          >
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a className="magic-hover magic-hover__square" href="#">
                        Portfolio
                      </a>
                      <ul>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="portfolio-details-1.html"
                          >
                            Portfolio 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="portfolio-details-2.html"
                          >
                            Portfolio 2
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="portfolio-details-3.html"
                          >
                            Portfolio 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a className="magic-hover magic-hover__square" href="#">
                        Blog
                      </a>
                      <ul>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="our-blog.html"
                          >
                            Our Blog
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="blog-details-1.html"
                          >
                            Blog Details 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="blog-details-2.html"
                          >
                            Blog Details 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a className="magic-hover magic-hover__square" href="#">
                        Pages
                      </a>
                      <ul>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="about.html"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="pricing-plans.html"
                          >
                            Pricing Plans
                          </a>
                        </li>
                        <li>
                          <a
                            className="magic-hover magic-hover__square"
                            href="404.html"
                          >
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="magic-hover magic-hover__square"
                        href="contact.html"
                      >
                        Contact
                      </a>
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
                <a
                  href="pdf/orix.pdf"
                  className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
                  target="_blank"
                >
                  <i className="fa-solid fa-download" />
                  Download CV
                </a>
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
                  <a className="magic-hover magic-hover__square" href="index.html">
                    Home 1
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="index-2.html"
                  >
                    Home 2
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="index-3.html"
                  >
                    Home 3
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="index-4.html"
                  >
                    Home 4 ( Light )
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="index-4-dark.html"
                  >
                    Home 4 ( Dark )
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="magic-hover magic-hover__square" href="about.html">
                <i className="icon-user" /> About
              </a>
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
                  <a
                    className="magic-hover magic-hover__square"
                    href="portfolio-details-1.html"
                  >
                    Portfolio Details 1
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="portfolio-details-2.html"
                  >
                    Portfolio Details 2
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="portfolio-details-3.html"
                  >
                    Portfolio Details 3
                  </a>
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
                  <a
                    className="magic-hover magic-hover__square"
                    href="our-blog.html"
                  >
                    Our Blog
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="blog-details-1.html"
                  >
                    Blog Details 1
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="blog-details-2.html"
                  >
                    Blog Details 2
                  </a>
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
                  <a
                    className="magic-hover magic-hover__square"
                    href="services.html"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="services-details.html"
                  >
                    Services Details
                  </a>
                </li>
                <li>
                  <a
                    className="magic-hover magic-hover__square"
                    href="pricing-plans.html"
                  >
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a className="magic-hover magic-hover__square" href="404.html">
                    404
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="magic-hover magic-hover__square" href="contact.html">
                <i className="icon-envelope-open" /> Contact
              </a>
            </li>
          </ul>
          <a
            className="magic-hover magic-hover__square"
            href="JavaScript:void(0)"
            id="res-cross"
          />
          <a
            href="pdf/orix.pdf"
            className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            target="_blank"
          >
            <i className="fa-solid fa-download" />
            Download CV
          </a>
        </div>
      </header>
      <section id="particles-js" className="blog-detail pattern error-page gap">
        <div className="container">
          <div
            className="error"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <div className="error-img">
              <h2>4</h2>
              <img alt={404} src="img/404.png" />
              <h2>4</h2>
            </div>
            <h3>Ooops, Page Not Found</h3>
            <p>We Can't Seem to find the page you're looking for.</p>
            <form className="one error-input">
              <input type="text" name="Kayword" placeholder="Enter Kayword...." />
              <button className="magic-hover magic-hover__square">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </form>
          </div>
          <div className="footer-data">
            <ul className="social-media-footer">
              <li>
                <a className="magic-hover magic-hover__square" href="#">
                  <i className="fa-brands fa-facebook-f fb" />
                  Facebook
                </a>
              </li>
              <li>
                <a className="magic-hover magic-hover__square" href="#">
                  <i className="fa-brands fa-twitter tw" />
                  Twitter
                </a>
              </li>
              <li>
                <a className="magic-hover magic-hover__square" href="#">
                  <i className="fa-brands fa-vimeo-v vi" />
                  Vimeo
                </a>
              </li>
              <li>
                <a className="magic-hover magic-hover__square" href="#">
                  <i className="fa-brands fa-linkedin-in in" />
                  Linked In
                </a>
              </li>
            </ul>
            <h6>
              © 2022 CV Resume
              <i className="fa-solid fa-heart" />
              By Winsfolio, All Rights Reserved
            </h6>
          </div>
        </div>
      </section>
    </div>
  )
}
