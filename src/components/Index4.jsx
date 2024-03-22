import React from 'react'

export default function Index4({ data }) {
    return (

        <div className="menu-layer light">
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
            <div className="tabs js-tabs">
                <header className="pages-one">
                    <a href="" className="bar-menu"><i className="fa-solid fa-bars" /></a>
                    <div className="header-home-one tabs-nav__list">
                        <div>
                            <img alt="logo" src="img/logo-black.png" />
                        </div>
                        <div className="tabs-nav js-tabs-nav" id="fade-example">
                            <ul className="menu-item main-menu tabs-nav__list">
                                <li className="active tabs-nav__item js-tabs-item"><a href="#tab-1" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-home" /><span>Home</span></a></li>
                                <li className="tabs-nav__item js-tabs-item"><a href="#tab-2" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-user" /><span>About Me</span></a></li>
                                <li className="tabs-nav__item js-tabs-item"><a href="#tab-3" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-graduation" /><span>Experience</span></a></li>
                                <li className="tabs-nav__item js-tabs-item"><a href="#tab-4" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-briefcase" /><span>Portfolio</span></a></li>
                                <li className="tabs-nav__item js-tabs-item"><a href="#tab-5" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-folder" /><span>News</span></a></li>
                                <li className="tabs-nav__item js-tabs-item"><a href="#tab-6" className="tabs-nav__link js-tabs-link magic-hover magic-hover__square"><i className="icon-envelope-open" /><span>Contact</span></a></li>
                            </ul>
                            <span className="tabs-nav__drag js-tabs-drag" />
                        </div>
                        <div className="share">
                            <a className="magic-hover magic-hover__square" href="#"><i className="icon-cursor" /></a>
                            <ul className="social-media-icon header"><li>
                            </li><li><a className="f magic-hover magic-hover__square" href=""><i className="fa-brands fa-facebook-f" /></a></li>
                                <li><a className="in magic-hover magic-hover__square" href=""><i className="fa-brands fa-instagram" /></a></li>
                                <li><a className="t magic-hover magic-hover__square" href=""><i className="fa-brands fa-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-nav" id="mobile-nav" style={{ display: 'block' }}>
                        <div className="mobile-nav-img-data">
                            <a className="magic-hover magic-hover__square" href="index.html">
                                <img alt="logo" src="img/black-logo.png" />
                            </a>
                        </div>
                        <ul className="menu-item main-menu tabs-nav__list">
                            <li className="active tabs-nav__item js-tabs-item"><a href="#tab-1" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-home" /><span>Home</span></a></li>
                            <li className="tabs-nav__item js-tabs-item"><a href="#tab-2" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-user" /><span>About Me</span></a></li>
                            <li className="tabs-nav__item js-tabs-item"><a href="#tab-3" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-graduation" /><span>Experience</span></a></li>
                            <li className="tabs-nav__item js-tabs-item"><a href="#tab-4" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-briefcase" /><span>Portfolio</span></a></li>
                            <li className="tabs-nav__item js-tabs-item"><a href="#tab-5" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-folder" /><span>News</span></a></li>
                            <li className="tabs-nav__item js-tabs-item"><a href="#tab-6" className="tabs-nav__link js-tabs-link new-tabe nav-anim magic-hover magic-hover__square"><i className="icon-envelope-open" /><span>Contact</span></a></li>
                        </ul>
                        <a className="magic-hover magic-hover__square" href="" id="res-cross" />
                        <a href="pdf/orix.pdf" className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s" target="_blank"><i className="fa-solid fa-download" />Download CV</a>
                    </div>
                </header>
                <section className="content-data">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" />
                            <div className="col-lg-4">
                                <div className="user-info">
                                    <img alt="profile" src="https://via.placeholder.com/247x296" />
                                    <h3>{data.about.name}</h3>
                                    <p>Graphic Designer, HTML Coder,
                                        and Project Manager</p>
                                    <a href="pdf/orix.pdf" className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s" target="_blank"><i className="fa-solid fa-download" />Download CV</a>
                                    <ul className="social-media">
                                        <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                        <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter" /></a></li>
                                        <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                        <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-stumbleupon" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="content-area tabs-content js-tabs-wrap">
                    <section id="tab-1" className="profile-info tab js-tabs-content active" style={{ backgroundImage: 'url(./img/background.png)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="user-data" data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
                                        <h2>Hello I Am</h2>
                                        <h1>{data.about.name}</h1>
                                        <p>Graphic Designer, HTML Coder, PHP Programmer
                                            and Project Manager</p>
                                        <a href="" className="lightbox-toggle button button--moema button--text-thick button--text-upper button--size-s">Start Consulting</a>
                                        <span>Available for Freelance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="tab-2" className="gap about-me tab js-tabs-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="heading">
                                        <h1>A</h1>
                                        <h3>About Me</h3>
                                    </div>
                                    <div className="who-i-am headings">
                                        <h3>Who I Am</h3>
                                        <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu
                                            libe ro, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pell
                                            entesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, digni
                                            ssim ilimAenean arcu libe ro, facilisis et nisi non, tempus faucibus tortor.
                                        </p>
                                    </div>
                                    <ul className="fun-facts">
                                        <li className="time">
                                            <h2 className="timer count-title count-number" data-to={35} data-speed={1500}>35</h2>
                                            <span>+</span>
                                            <p>Years Of Experience</p>
                                        </li>
                                        <li className="time">
                                            <h2 className="timer count-title count-number" data-to={256} data-speed={1500}>256</h2>
                                            <span>+</span>
                                            <p>Years Of Experience</p>
                                        </li>
                                        <li className="time">
                                            <h2 className="timer count-title count-number" data-to={9} data-speed={1500}>09</h2>
                                            <span>+</span>
                                            <p>Years Of Experience</p>
                                        </li>
                                    </ul>
                                    <div className="headings services">
                                        <h3>What We Do</h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service">
                                                    <svg id="Layer_3" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 		100.66 135.65">
                                                        <g id="Layer_3-2" data-name="Layer 1">
                                                            <g>
                                                                <path d="M91.9,96.27c0,9.17,0,18,0,26.83,0,8.31-4.29,12.55-12.66,12.55-19.32,0-38.65,0-57.97,0-8.18,0-12.49-4.3-12.5-12.44,0-8.84,0-17.67,0-26.94-1.69,0-3.28,0-4.88,0-3.53-.02-3.87-.36-3.87-3.98C0,70.6,.05,48.9,0,27.21c-.06-2.18,.87-3.22,3.09-3.15,1.8,.06,3.6,.01,5.67,.01,0-4.32-.02-8.4,0-12.47C8.82,4.56,13.37,.02,20.46,.02,40.43,0,60.39,0,80.35,.02c6.9,0,11.48,4.59,11.54,11.46,.04,4.09,0,8.17,0,12.59,1.97,0,3.76,.05,5.55-.01,2.15-.08,3.21,.78,3.21,3.02-.02,22.06-.02,44.12,0,66.17,0,2.04-.87,3.06-2.95,3.02-1.81-.03-3.63,0-5.81,0Zm4.18-4.49V46.17H4.54v45.61H96.08Zm-8.55-67.81c0-4.04,.01-7.84,0-11.65-.02-5.54-2.42-7.92-8.04-7.92-19.85,.02-39.71-.06-59.56,.02-3.56,.05-6.46,2.32-6.64,5.62-.26,4.6-.07,9.22-.07,13.94H87.52ZM4.51,41.38H96.15v-12.79H4.51v12.79ZM87.52,113.95H13.14c0,3.35-.02,6.53,0,9.7,.03,5.03,2.55,7.59,7.53,7.61,19.76,.02,39.52,.01,59.28,0,5.01,0,7.52-2.56,7.56-7.58,.02-3.18,0-6.35,0-9.73Zm-.13-17.49H13.36v12.8H87.4v-12.8Z" />
                                                                <path d="M59.24,52.33c-4.05,10.16-8.53,20-12.78,30.07-.32,.75-.57,1.68-1.16,2.11-.62,.45-1.78,.76-2.39,.47-.63-.3-.93-1.37-1.25-2.16-.1-.25,.18-.68,.32-1.01,4.22-9.86,8.45-19.71,12.66-29.57,1.09-2.76,3.32-2.34,4.59,.09Z" />
                                                                <path d="M25.87,67.96c3.1,2.98,5.97,5.74,8.85,8.51,1.12,1.07,2.11,2.24,.71,3.71-1.4,1.46-2.59,.59-3.71-.54-3.2-3.23-6.39-6.48-9.65-9.65-1.6-1.56-1.5-2.87,.06-4.39,3.26-3.17,6.45-6.42,9.66-9.64,1.04-1.05,2.16-1.87,3.52-.62,1.47,1.36,.73,2.57-.43,3.72-2.85,2.81-5.68,5.63-8.99,8.91Z" />
                                                                <path d="M75.05,67.83c-3.23-3.08-6.06-5.76-8.88-8.45-1.14-1.09-2.48-2.25-.93-3.89,1.53-1.62,2.75-.45,3.9,.71,3.15,3.16,6.28,6.34,9.48,9.45,1.59,1.55,1.53,2.88-.04,4.4-3.26,3.17-6.46,6.42-9.67,9.64-1.14,1.14-2.39,1.92-3.73,.47-1.23-1.33-.44-2.51,.64-3.53,2.95-2.81,5.9-5.62,9.24-8.79Z" />
                                                                <path d="M50.52,8.76c2.64,0,5.27,.02,7.91,0,1.58-.02,2.79,.51,2.76,2.24-.04,1.74-1.31,2.15-2.86,2.15-5.36-.03-10.73-.02-16.09,0-1.57,0-2.79-.5-2.76-2.24,.04-1.75,1.31-2.16,2.86-2.15,2.73,.03,5.45,0,8.18,0Z" />
                                                                <path d="M70.94,10.92c-1.48,1.01-2.34,2.05-3.18,2.03-.7-.01-2.05-1.41-1.93-1.91,.21-.87,1.25-1.94,2.11-2.11,.65-.14,1.56,.98,3,1.99Z" />
                                                                <path d="M75.3,35.13c-1.52,.94-2.43,1.94-3.27,1.89-.7-.04-1.98-1.52-1.83-2.01,.25-.86,1.34-1.87,2.21-2.01,.65-.11,1.5,1.05,2.89,2.13Z" />
                                                                <path d="M80.81,38.02c-2.47-3.24-2.57-2.79,.25-5.16,2.59,2.64,2.51,2.18-.25,5.16Z" />
                                                                <path d="M86.6,35.05c3.1-2.24,2.89-3.11,5.27-.12-2.46,2.85-1.96,2.66-5.27,.12Z" />
                                                                <path d="M43.79,122.58c-.05-3.59,2.94-6.61,6.55-6.61,8.59,.4,8.7,12.53,.13,13.1-3.6,.06-6.63-2.88-6.68-6.49Zm6.39-3.16c-.92,1.53-1.91,2.45-1.85,3.3,.05,.69,1.54,1.95,2.03,1.8,.85-.26,1.85-1.36,1.98-2.23,.1-.65-1.07-1.49-2.16-2.87Z" />
                                                                <path d="M28.4,124.7c-1.36,0-2.79,.26-4.06-.09-.92-.25-1.61-1.31-2.4-2.01,.74-.75,1.42-2.08,2.22-2.15,2.88-.26,5.81-.24,8.69,0,.75,.06,2.08,1.45,1.97,1.95-.2,.88-1.21,1.96-2.09,2.2-1.35,.37-2.88,.1-4.33,.1Z" />
                                                                <path d="M72.45,120.35c1.36,0,2.81-.28,4.06,.09,.88,.27,1.88,1.34,2.07,2.22,.11,.51-1.23,1.87-1.99,1.94-2.88,.24-5.81,.26-8.69,0-.79-.07-1.86-1.33-2.05-2.21-.11-.51,1.18-1.76,2-1.94,1.47-.32,3.07-.09,4.61-.09Z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <h5>Application Design</h5>
                                                    <p>Lorem ipsum indolor st amet, cm
                                                        etctetur adips locing elit, sedi din
                                                        m indolor st  ilmes.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service">
                                                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.32 						161.32">
                                                        <g id="Layer_2-2" data-name="Layer 1">
                                                            <g>
                                                                <path d="M161.32,47.92c-3.53,3.4-7.07,6.8-10.59,10.21-2.58,2.5-3.39,2.51-5.98-.04-2.77-2.72-5.52-5.46-8.27-8.21-3.19-3.18-3.18-3.64-.04-6.84,.43-.44,.83-.91,1.25-1.37-19.87-16.27-54.51-19.28-79.63-1.4,2.15,5.49,1.94,10.86-2.51,15.27-4.36,4.32-9.59,4.74-15.08,2.46-15.57,20.35-17.79,54.79,.78,79.48,.19,0,.47,.07,.57-.04,5.32-5.35,5.39-3.59,9.62,.59,2.31,2.29,4.54,4.67,6.91,6.9,2.04,1.93,2.04,3.61,.03,5.59-3.56,3.52-6.98,7.18-10.46,10.78h-2.52c-3.5-3.48-7.01-6.94-10.49-10.43-2.85-2.86-2.85-3.43,.1-6.38,.88-.89,1.88-1.66,2.85-2.51-16.02-22.99-19.1-47.28-10.02-73.45-4.05,4.08-8.16,8.12-12.1,12.31-.55,.58-.49,1.92-.4,2.87,.5,5.05-2.56,8.91-7.3,9.05C3.36,92.93-.24,89.27,.01,84.65c.25-4.64,4.3-7.68,9.25-7.19,1.12,.11,2.66-.29,3.44-1.04,7.15-6.96,14.13-14.08,21.26-21.06,1.29-1.27,1.32-2.22,.64-3.79-2.26-5.26-1.28-10.09,2.63-14.22,3.7-3.91,9.12-5.03,14.17-2.78,1.93,.86,2.93,.43,4.28-.94,6.69-6.82,13.45-13.58,20.25-20.28,1.36-1.34,1.98-2.51,1.61-4.56-.68-3.79,1.34-6.9,4.79-8.25,3.24-1.27,6.91-.2,8.97,2.63,2.02,2.76,1.96,6.72-.19,9.37-1.88,2.32-4.36,2.95-7.3,2.85-1.34-.05-3.04,.52-4.01,1.42-3.87,3.59-7.52,7.42-11.15,11.37,25.93-9.43,50.13-6.38,73.95,10.12,.65-1.05,1.37-2.48,2.33-3.71,1.71-2.18,3.51-2.24,5.51-.14,3.55,3.72,7.23,7.31,10.85,10.96v2.52Zm-114.96,6.33c4.35,.03,7.81-3.33,7.87-7.66,.06-4.43-3.53-8.08-7.89-8.02-4.21,.06-7.79,3.69-7.78,7.89,0,4.25,3.52,7.76,7.81,7.79Zm-6.82,93.09c2.44,2.47,4.82,4.88,6.89,6.97,2.3-2.12,4.73-4.36,6.85-6.31-2.33-2.59-4.55-5.06-6.77-7.54-2.52,2.49-4.9,4.84-6.97,6.88ZM148.59,40c-2.56,2.32-5.11,4.62-7.25,6.56,2.05,2.26,4.22,4.65,6.37,7.01,2.5-2.45,4.88-4.79,7.19-7.06-2.4-2.47-4.73-4.87-6.32-6.51ZM88.84,7.59c-1.85-1.17-2.97-2.42-3.83-2.27-.94,.16-2.28,1.64-2.28,2.54,0,.81,1.55,2.17,2.49,2.25,.88,.07,1.87-1.23,3.62-2.52ZM11.45,84.83c-1.85-1.07-2.91-2.18-3.89-2.11-.81,.06-1.51,1.52-2.26,2.36,.94,.82,1.78,2.08,2.84,2.3,.68,.14,1.69-1.24,3.3-2.56Z" />
                                                                <path d="M118.48,161.32c-2.73-5.18-5.36-10.41-8.27-15.49-.8-1.39-2.26-2.74-3.73-3.34-7.56-3.1-15.26-5.83-22.8-8.97-1.62-.67-3.37-2.25-4.02-3.83-8.38-20.56-16.54-41.21-24.84-61.8-.97-2.4-.72-4.11,1.25-5.82,1.98-1.71,3.88-3.56,5.55-5.57,1.99-2.39,3.98-2.65,6.87-1.48,19.41,7.88,38.84,15.71,58.38,23.26,4.21,1.63,6.62,3.99,8,8.25,2.1,6.47,4.9,12.7,7.16,19.12,.91,2.59,2.46,4.08,4.87,5.25,4.89,2.37,9.63,5.03,14.43,7.58v2.52c-5.66,5.57-11.35,11.09-16.96,16.71-7.82,7.84-15.58,15.74-23.37,23.62h-2.52ZM59.93,65.02c.2,1.14,.22,2.28,.61,3.26,7.72,19.38,15.45,38.75,23.29,58.07,.47,1.17,1.7,2.38,2.87,2.86,6.99,2.85,14.08,5.43,21.08,8.25,1.82,.73,2.99,.57,4.39-.86,8.1-8.23,16.27-16.39,24.48-24.51,1.3-1.29,1.59-2.35,.88-4.11-2.86-7.09-5.48-14.29-8.34-21.38-.44-1.1-1.54-2.28-2.63-2.72-19.53-7.91-39.1-15.71-58.68-23.49-.87-.35-1.94-.2-3.01-.29,11.06,11.08,21.79,21.81,32.67,32.71,8.25-3.7,15.6-2.3,20.13,4.2,4.07,5.86,3.45,13.68-1.49,18.82-4.92,5.11-12.84,6.11-18.73,2.12-8-5.42-8.37-13.85-4.84-20.31-10.9-10.88-21.63-21.59-32.69-32.62Zm59.94,88.48c11.24-11.24,22.43-22.43,33.61-33.61-3.56-1.77-7.55-3.76-11.15-5.55-9.52,9.46-18.74,18.62-28.1,27.92,1.93,3.84,3.93,7.83,5.64,11.23Zm-24.08-48.01c0,5.39,4.42,9.81,9.76,9.77,5.33-.04,9.78-4.59,9.69-9.9-.09-5.23-4.41-9.51-9.67-9.56-5.42-.06-9.78,4.26-9.78,9.69Z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <h5>Graphic Design</h5>
                                                    <p>Lorem ipsum indolor st amet, cm
                                                        etctetur adips locing elit, sedi din
                                                        m indolor st  ilmes.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service">
                                                    <svg id="Layer_1" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.81 		42.15">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <g>
                                                                <path className="cls-6" d="M43.63,30c-3.69,2.09-7.37,4.17-11.06,6.27-3.36,1.91-6.72,3.84-10.09,5.73-.28,.16-.78,.21-1.04,.07-7.01-3.97-14-7.97-20.99-11.96-.11-.07-.22-.15-.42-.29,2.57-1.46,5.05-2.88,7.64-4.35C5.09,23.98,2.59,22.54,0,21.06c2.6-1.48,5.09-2.89,7.68-4.37-2.59-1.49-5.1-2.93-7.68-4.4,3.9-2.22,7.73-4.4,11.56-6.58,3.22-1.83,6.44-3.64,9.64-5.49,.49-.28,.86-.31,1.38-.01,6.82,3.9,13.65,7.77,20.48,11.64,.24,.14,.5,.23,.75,.34v.17c-2.54,1.42-5.08,2.83-7.72,4.3,1.3,.74,2.46,1.38,3.61,2.05,1.34,.78,2.67,1.58,4.01,2.37-2.5,1.44-4.99,2.88-7.57,4.37,2.4,1.37,4.69,2.67,6.98,3.99,.21,.12,.34,.36,.51,.54ZM7.26,19.06c-.12,.09-.24,.19-.35,.28-1.07,.54-2.13,1.08-3.2,1.62,0,.08,.02,.16,.02,.24,.38,.13,.78,.41,1.14,.36,.61-.08,.91,.09,1.1,.64,.06,.17,.21,.34,.36,.43,2.51,1.44,5.03,2.87,7.54,4.31,0-.09,0-.19,0-.28,.43-.08,.99-.35,1.26-.17,.28,.18,.28,.79,.47,1.41,1.39,.8,3.11,1.62,4.63,2.72,1.48,1.07,2.74,1.14,4.13-.03,.6-.5,1.53-.62,1.76-1.57,.04-.15,.42-.36,.55-.31,1.01,.37,1.53-.48,2.07-.69-.14-.45-.4-.84-.33-1.16,.05-.23,.61-.58,.8-.5,.34,.14,.56,.55,.9,.92,2.5-1.43,5.18-2.96,7.86-4.49-.13-.91,.31-1.52,.86-1.2,.95,.57,1.39-.2,2.13-.54-1.98-1.12-3.85-2.18-5.73-3.24-.14-.08-.36-.16-.46-.11-.91,.49-1.79,1.01-2.44,1.39-.17,.63-.18,1.32-.41,1.4-.38,.14-.9-.11-1.36-.2-2.29,1.11-4.63,2.41-6.93,3.77-.4,.24-.66,.71-1.03,1.01-.22,.18-.55,.38-.79,.34-.24-.04-.49-.34-.62-.59-.08-.15,.03-.41,.06-.62-2.68-1.53-5.32-3.04-7.79-4.45-.42,.37-.7,.73-1.08,.89-.15,.06-.68-.31-.71-.53-.05-.34,.19-.71,.37-1.3-.86-.26-1.87-.58-2.89-.88-.06-.02-.15,.07-.23,.11-.56,.34-1.11,.67-1.67,1.01Zm33.72-6.76c-6.15-3.49-12.17-6.92-18.22-10.32-.26-.15-.77-.08-1.05,.08-2.66,1.47-5.3,2.99-7.95,4.49-3.36,1.91-6.71,3.81-10.1,5.73,.14,.1,.22,.18,.32,.24,5.95,3.4,11.9,6.8,17.87,10.17,.24,.14,.71,.11,.96-.03,2.41-1.34,4.8-2.72,7.19-4.09,3.63-2.07,7.26-4.14,10.98-6.27ZM3.62,29.83c6.19,3.54,12.21,6.99,18.25,10.4,.26,.14,.76,.06,1.05-.1,5.82-3.29,11.62-6.61,17.42-9.93,.18-.1,.35-.23,.6-.4-1.87-1.06-3.66-2.05-5.42-3.09-.45-.26-.76-.27-1.22,0-3.76,2.18-7.56,4.32-11.32,6.5-.51,.3-.88,.27-1.38-.02-3.77-2.18-7.55-4.33-11.34-6.47-.24-.13-.63-.27-.82-.17-1.92,1.04-3.8,2.13-5.83,3.28Z" />
                                                                <path className="cls-2" d="M7.26,19.06c.08,.01,.17,.03,.25,.04,.56,.07,.99,.36,.81,.93-.09,.28-.62,.62-.91,.59-.6-.06-.71-.57-.51-1.11,.02-.05,.01-.11,.02-.17,.12-.09,.24-.19,.35-.28Z" />
                                                                <path className="cls-2" d="M10.06,21.15c.32,.56,.68,.91,.65,1.21-.03,.27-.5,.48-.77,.72-.25-.29-.66-.56-.7-.88-.03-.25,.4-.55,.82-1.06Z" />
                                                                <path className="cls-2" d="M14.98,21.39c.19,.33,.54,.67,.51,.98-.03,.27-.51,.68-.77,.67-.27-.01-.71-.47-.71-.73,0-.31,.38-.62,.6-.93,.12,0,.25,.01,.37,.02Z" />
                                                                <path className="cls-2" d="M13.51,24.71c-.55,.37-.89,.77-1.13,.72-.31-.07-.54-.5-.81-.78,.26-.25,.53-.69,.8-.7,.3,0,.61,.39,1.14,.76Z" />
                                                                <path className="cls-5" d="M27.8,24.65c-.47,.37-.77,.8-1.01,.77-.32-.05-.58-.46-.87-.71,.27-.27,.51-.7,.83-.77,.23-.05,.57,.36,1.06,.71Z" />
                                                                <path className="cls-5" d="M29.34,21.39c.18,.33,.53,.67,.5,.97-.03,.27-.5,.69-.75,.68-.27-.02-.71-.46-.72-.73,0-.3,.38-.62,.59-.93,.12,0,.25,0,.37,.01Z" />
                                                                <path className="cls-2" d="M18.24,24.65c-.46,.37-.77,.81-1.01,.77-.32-.04-.58-.45-.87-.71,.27-.27,.5-.7,.82-.77,.24-.05,.57,.36,1.06,.7Z" />
                                                                <path className="cls-1" d="M23.07,29.5c-.55,.37-.9,.76-1.13,.7-.31-.08-.54-.5-.81-.77,.27-.25,.52-.69,.8-.7,.3,0,.6,.39,1.14,.77Z" />
                                                                <path className="cls-4" d="M19.48,25.94c.4,.51,.82,.82,.79,1.06-.04,.31-.41,.73-.71,.8-.2,.05-.73-.4-.75-.66-.03-.3,.34-.64,.67-1.2Z" />
                                                                <path className="cls-1" d="M24.27,25.94c.4,.51,.81,.82,.78,1.07-.04,.31-.41,.73-.71,.8-.21,.05-.73-.41-.75-.67-.02-.31,.34-.64,.68-1.2Z" />
                                                                <path className="cls-5" d="M37.37,19.89c-.47,.37-.79,.79-1.02,.75-.32-.06-.57-.47-.85-.73,.28-.27,.52-.68,.84-.75,.23-.05,.56,.37,1.04,.73Z" />
                                                                <path className="cls-5" d="M35.02,22.29c-.53,.37-.85,.76-1.14,.75-.27-.01-.77-.51-.73-.71,.06-.32,.45-.71,.76-.79,.23-.05,.56,.36,1.1,.74Z" />
                                                                <path className="cls-3" d="M31.44,23.54c.4,.52,.81,.82,.78,1.07-.04,.31-.45,.58-.7,.86-.27-.24-.74-.46-.77-.72-.03-.31,.34-.64,.68-1.21Z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <h5>Stunning Design</h5>
                                                    <p>Lorem ipsum indolor st amet, cm
                                                        etctetur adips locing elit, sedi din
                                                        m indolor st  ilmes.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service">
                                                    <svg id="Layer_6" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.5 		383.4">
                                                        <g id="Layer_6-2" data-name="Layer 1">
                                                            <g>
                                                                <path className="cls-2" d="M184.05,383.4h10.48c.24-.22,.46-.61,.73-.65,15.29-2.42,26.5-15.32,26.77-30.83,.27-15.94-12.14-30.34-27.69-32.11-16.97-1.93-32.17,8.76-35.59,25.03-3.37,16.04,6.08,32.18,21.68,37.08,1.24,.39,2.42,.99,3.63,1.49Zm21.86-32.54c.23,8.98-6.81,16.37-15.68,16.45-8.59,.08-15.8-6.82-16.05-15.35-.27-9.04,6.63-16.43,15.49-16.61,8.8-.17,16.01,6.71,16.24,15.51Z" />
                                                                <path className="cls-2" d="M311.34,383.4h11.23c1.22-.39,2.42-.81,3.66-1.15,15.45-4.22,25.13-18.81,23.26-35.09-1.75-15.24-15.23-27.2-31.02-27.55-16.24-.35-29.52,10.9-32.29,27.38-2.5,14.86,7.16,30.17,21.98,34.92,1.11,.35,2.12,.99,3.18,1.49Zm22.45-32.19c.09,8.67-7.1,16.02-15.76,16.11-8.67,.09-15.97-7-16.2-15.72-.22-8.77,7.13-16.23,15.98-16.24,8.75,0,15.89,7.08,15.97,15.85Z" />
                                                                <path className="cls-2" d="M56,383.4h10.48c1.36-.38,2.72-.76,4.08-1.13,15.17-4.13,25.38-19.02,23.48-34.26-2.03-16.31-15.11-28.15-31.4-28.42-15.83-.26-29.62,11.31-32,26.86-2.41,15.73,6.98,30.75,22.14,35.49,1.11,.35,2.15,.96,3.22,1.45Zm6.35-48.04c8.72,.06,15.85,7.22,15.91,15.97,.06,8.57-7.35,16.01-15.93,16-8.85,0-16.14-7.38-16.04-16.23,.1-8.72,7.33-15.8,16.06-15.74Z" />
                                                                <path className="cls-2" d="M79.17,95.89c-.61,.04-.97,.11-1.33,.09C36.38,93.86,4.22,121.59,.28,162.84c-3.3,34.57,22.5,68.94,57.23,74.96,11.07,1.92,22.59,1.32,33.91,1.67,6.97,.21,10.82-2.83,10.77-8.01-.04-5.13-3.83-7.78-10.9-7.89-9.97-.16-20.08,.52-29.88-.89-26.11-3.75-44.7-24.81-47.01-51.96-2.03-23.85,13.78-47.5,37.4-55.86,10.27-3.63,20.72-3.93,31.32-1.68,7.17,1.52,10.48-.92,11.41-8.27,.35-2.72,.6-5.45,1.04-8.16C106.12,32.12,176.83-3.2,234.7,27.42c24.88,13.16,40.82,33.69,48.17,60.85,1.86,6.87,4.67,8.38,11.57,8.08,6.91-.3,14.03-.27,20.78,1.06,29.5,5.8,50.5,32.73,50.11,63.53-.38,29.93-22.52,56.45-51.92,61.25-8.91,1.45-18.13,1-27.21,1.41-4.84,.22-8.26,3.42-8.32,7.82-.06,4.54,3.47,7.97,8.48,8.07,4.37,.09,8.73,.02,13.1,.02,42.3-.02,77.22-32.79,79.88-74.96,2.87-45.4-33.13-84.17-78.68-84.62-2.76-.03-3.7-.92-4.55-3.46C279.67,26.89,231.2-4.55,179.24,.54c-47.7,4.66-86.66,38.58-97.88,85.24-.81,3.35-1.46,6.74-2.18,10.12Z" />
                                                                <path className="cls-1" d="M166.08,218.84c0,3.9-.08,8.15,.02,12.38,.12,4.96,3.29,8.2,8.26,8.25,10.48,.1,20.96,.1,31.44,0,4.93-.05,8.05-3.33,8.19-8.33,.09-3.12,.22-6.25-.04-9.35-.24-2.74,.93-3.91,3.13-5.45,3.82-2.68,6.87-2.27,10.25,.38,1.36,1.06,2.98,1.79,4.52,2.61,6.62,3.5,9.35,3.05,13.34-3.39,5.37-8.67,10.37-17.57,15.31-26.5,2.28-4.12,1.02-8.15-2.95-10.69-2.62-1.68-5.3-3.29-8.11-4.61-2.56-1.21-3.25-2.8-3.49-5.7-.36-4.38,1.29-6.65,5-8.25,2.04-.88,3.94-2.14,5.84-3.31,4.82-2.95,5.93-7.06,3.16-12.1-3.11-5.67-6.26-11.33-9.55-16.9-2.27-3.85-4.67-7.65-7.29-11.27-2.16-2.99-5.23-3.76-8.61-2.04-3.21,1.63-6.43,3.29-9.48,5.21-2.11,1.32-3.61,1.23-6.01,.19-4.4-1.91-5.8-4.67-5.13-9.17,.33-2.2,.13-4.49,.04-6.73-.21-4.99-3.32-8.23-8.26-8.27-10.48-.1-20.96-.1-31.44,0-4.92,.05-8.02,3.35-8.15,8.35-.08,3.12-.23,6.26,.05,9.35,.25,2.76-.98,3.9-3.16,5.43-3.82,2.68-6.85,2.2-10.27-.37-1.77-1.34-3.84-2.3-5.82-3.35-4.75-2.51-8.7-1.5-11.53,3.08-2.81,4.55-5.54,9.16-8.16,13.82-2.68,4.76-5.43,9.51-7.68,14.48-2.01,4.43-1.13,6.9,2.84,9.62,2.76,1.9,5.64,3.69,8.66,5.14,2.41,1.15,2.79,2.73,3.02,5.22,.4,4.35-.99,7.03-5.08,8.54-1.61,.59-3.05,1.67-4.52,2.6-6.3,4-7.3,6.69-3.75,13.29,4.83,8.98,10.07,17.74,15.3,26.5,2.12,3.55,5.72,4.71,9.35,3.33,1.73-.66,3.49-1.48,4.91-2.64,5.27-4.31,10.43-5.25,15.84,.65Zm-20.4-16.09c-2.74-4.77-5.28-9.18-7.9-13.73,2.82-1.68,5.64-3.25,8.34-5,3.77-2.45,5.4-5.63,4.63-10.45-.66-4.1-.47-8.47,.11-12.61,.5-3.58-.34-6.12-3.22-8.03-3.19-2.12-6.46-4.13-9.82-6.27,2.6-4.52,5.11-8.91,7.85-13.67,2.75,1.59,5.47,3,8.01,4.67,3.5,2.3,6.69,2.18,10.24-.03,4.26-2.65,8.64-5.1,13.15-7.29,3.01-1.46,4.71-3.64,4.77-6.91,.07-3.59,.02-7.18,.02-11.04h16.24c0,3.56,.06,7.01-.02,10.47-.07,3.23,1.42,5.3,4.21,6.86,4.97,2.78,9.65,6.11,14.79,8.52,2.15,1.01,5.36,.9,7.7,.12,3.34-1.11,6.33-3.3,9.67-5.15,2.6,4.5,5.13,8.89,7.87,13.64-2.89,1.71-5.67,3.49-8.58,5.04-3.56,1.89-4.79,4.56-4.15,9.1,.67,4.74,.5,9.55-.07,14.31-.47,3.98,.72,6.42,3.81,8.19,3,1.72,5.94,3.53,8.99,5.35-2.67,4.64-5.2,9.03-7.85,13.63-3.03-1.69-5.92-3.32-8.83-4.92-3.66-2.01-6.88-1.58-10.35,.96-3.68,2.68-7.81,4.79-11.9,6.84-3.62,1.81-5.61,4.26-5.33,8.47,.2,3.09,.04,6.2,.04,9.57h-16.07c0-3.5,.07-6.95-.02-10.39-.11-4.07-2.26-6.53-6.24-8.16s-7.48-3.85-10.93-6.27c-3.88-2.73-7.39-3.21-11.41-.35-2.31,1.64-4.9,2.89-7.74,4.53Z" />
                                                                <path className="cls-3" d="M198.09,287.4h111.28c0,2.54-.05,4.87,.01,7.2,.13,5.05,3.35,8.38,7.99,8.35,4.55-.04,7.64-3.19,7.77-8.13,.11-4.21,.03-8.42,.03-12.63,0-8.54-2.24-10.79-10.74-10.79-37.28,0-74.56,0-111.85,0-1.32,0-2.63,0-4.18,0,0-2.81,.09-5.15-.02-7.49-.24-5.04-3.6-8.5-8.05-8.44-4.48,.06-7.69,3.52-7.89,8.61-.09,2.32-.02,4.65-.02,7.33-1.68,0-3.01,0-4.34,0-19.82,0-40.37,0-60.33,0-18.07,0-36.14-.03-54.21,.02-5.05,.01-9.15,4.09-9.2,9.15-.05,5.3-.1,10.61,.03,15.9,.13,5.17,3.39,8.52,7.97,8.48,4.49-.04,7.72-3.55,7.88-8.66,.08-2.6,.01-5.2,.01-7.88h111.76s-.04,3.64,0,5.75c.11,5.69,3.23,9.18,8.12,9.14,4.86-.04,7.86-3.54,7.96-9.31,.04-2.08,0-4.17,0-6.58Z" />
                                                                <path className="cls-2" d="M166.08,167.5c-.03,13.27,10.68,24.05,23.92,24.09,13.22,.04,24.01-10.78,23.99-24.02-.03-13.09-10.68-23.82-23.73-23.89-13.29-.08-24.14,10.62-24.18,23.82Zm31.96,0c.08,4.34-3.72,8.18-8.07,8.14-4.22-.04-7.87-3.66-7.95-7.88-.08-4.35,3.71-8.18,8.06-8.14,4.22,.04,7.87,3.65,7.95,7.88Z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <h5>Video Production</h5>
                                                    <p>Lorem ipsum indolor st amet, cm
                                                        etctetur adips locing elit, sedi din
                                                        m indolor st  ilmes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="headings clients-reviews">
                                        <h3>Client’s Reviews</h3>
                                        <div className="photo owl-carousel owl-theme">
                                            <div className="quote item" data-hash="zero">
                                                <img alt="quote" src="img/quote.png" />
                                                <div>
                                                    <h6>We help our clients from the definition of their
                                                        strategy to the realization of their digital ecosystem.
                                                        At the heart of our approach is the constant search
                                                        for the juncture between aesthetic.</h6>
                                                    <a className="magic-hover magic-hover__square" href="#">Edison Cavani</a>
                                                    <span>Product Management at Spotify</span>
                                                </div>
                                            </div>
                                            <div className="quote item" data-hash="one">
                                                <img alt="quote" src="img/quote.png" />
                                                <div>
                                                    <h6>We help our clients from the definition of their
                                                        strategy to the realization of their digital ecosystem.
                                                        At the heart of our approach is the constant search
                                                        for the juncture between aesthetic.</h6>
                                                    <a className="magic-hover magic-hover__square" href="#">Edison Cavani</a>
                                                    <span>Product Management at Spotify</span>
                                                </div>
                                            </div>
                                            <div className="quote item" data-hash="two">
                                                <img alt="quote" src="img/quote.png" />
                                                <div>
                                                    <h6>We help our clients from the definition of their
                                                        strategy to the realization of their digital ecosystem.
                                                        At the heart of our approach is the constant search
                                                        for the juncture between aesthetic.</h6>
                                                    <a className="magic-hover magic-hover__square" href="#">Edison Cavani</a>
                                                    <span>Product Management at Spotify</span>
                                                </div>
                                            </div>
                                            <div className="quote item" data-hash="three">
                                                <img alt="quote" src="img/quote.png" />
                                                <div>
                                                    <h6>We help our clients from the definition of their
                                                        strategy to the realization of their digital ecosystem.
                                                        At the heart of our approach is the constant search
                                                        for the juncture between aesthetic.</h6>
                                                    <a className="magic-hover magic-hover__square" href="#">Edison Cavani</a>
                                                    <span>Product Management at Spotify</span>
                                                </div>
                                            </div>
                                            <div className="quote item" data-hash="for">
                                                <img alt="quote" src="img/quote.png" />
                                                <div>
                                                    <h6>We help our clients from the definition of their
                                                        strategy to the realization of their digital ecosystem.
                                                        At the heart of our approach is the constant search
                                                        for the juncture between aesthetic.</h6>
                                                    <a className="magic-hover magic-hover__square" href="#">Edison Cavani</a>
                                                    <span>Product Management at Spotify</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="photo-preview">
                                            <a className="magic-hover magic-hover__square secondary url" href="#zero"><img alt="slider" src="https://via.placeholder.com/80x80" /></a>
                                            <a className="magic-hover magic-hover__square secondary url" href="#one"><img alt="slider" src="https://via.placeholder.com/80x80" /></a>
                                            <a className="magic-hover magic-hover__square secondary url" href="#two"><img alt="slider" src="https://via.placeholder.com/80x80" /></a>
                                            <a className="magic-hover magic-hover__square secondary url" href="#three"><img alt="slider" src="https://via.placeholder.com/80x80" /></a>
                                            <a className="magic-hover magic-hover__square secondary url" href="#for"><img alt="slider" src="https://via.placeholder.com/80x80" /></a>
                                        </div>
                                    </div>
                                    <div className="clients">
                                        <div className="headings">
                                            <h3>Sponsor and Clients</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="client">
                                                    <img alt="clients" src="https://via.placeholder.com/122x68" />
                                                    <a href="#" className="magic-hover magic-hover__square">www.winsfolio.net</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="tab-3" className="gap Experience tab js-tabs-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="heading">
                                        <h1>E</h1>
                                        <h3>Experience</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="headings resume">
                                                <h3>Education</h3>
                                            </div>
                                            <div className="education">
                                                <h5>2012 to 2014</h5>
                                                <p>Bachelor Degree</p>
                                                <div className="studies">
                                                    <h6>University of Studies</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                            <div className="education">
                                                <h5>2010 to 2012</h5>
                                                <p>Master Degree</p>
                                                <div className="studies">
                                                    <h6>University of South Education</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                            <div className="education end">
                                                <h5>2008 to 2010</h5>
                                                <p>Advanced Post Graduate</p>
                                                <div className="studies">
                                                    <h6>University of South Education</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="headings resume">
                                                <h3>Experience</h3>
                                            </div>
                                            <div className="education">
                                                <h5>2018 to Present</h5>
                                                <p>Graphic Designer / Web Designer</p>
                                                <div className="studies">
                                                    <h6>Envato Studio</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                            <div className="education">
                                                <h5>2016 to 2018</h5>
                                                <p>Junior Ui/Ux Designer</p>
                                                <div className="studies">
                                                    <h6>Envato Studio</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                            <div className="education end">
                                                <h5>20014 to 2016</h5>
                                                <p>Senior Ui/Ux Designer</p>
                                                <div className="studies">
                                                    <h6>Envato Studio</h6>
                                                    <p>Lorem ipsum indolor st amet, cmetc
                                                        ur adips locing elit, sedi dinm indolo
                                                        sum indolor st ailmes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="headings skills">
                                            <h3>Professional Skills</h3>
                                        </div>
                                        <div className="chart one">
                                            <h6>UI / UX DESIGN</h6>
                                            <div className="bar" />
                                            <span className="value1">100%</span>
                                        </div>
                                        <div className="chart two">
                                            <h6>Graphic Designing</h6>
                                            <div className="bar" />
                                            <span className="value1">60%</span>
                                        </div>
                                        <div className="chart three">
                                            <h6>Web Develpment</h6>
                                            <div className="bar" />
                                            <span className="value1">95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="tab-4" className="gap portfolio tab js-tabs-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="heading">
                                        <h1>P</h1>
                                        <h3>Portfolio</h3>
                                    </div>
                                    <div className="headings work">
                                        <h3>Work Showcase</h3>
                                    </div>
                                    <div className="filters portfolio-controllers-container">
                                        <div className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group" data-wow-duration="1s" data-wow-delay=".1s" data-aos="fade-up" data-aos-delay={500} data-aos-duration={900} data-filter-group="color">
                                            <button type="button" className="button is-checked filter-btn magic-hover magic-hover__square active-work" data-filter>Show All</button>
                                            <button type="button" className="filter-btn magic-hover magic-hover__square" data-filter=".Design">Design</button>
                                            <button type="button" className="filter-btn magic-hover magic-hover__square" data-filter=".Branding">Branding</button>
                                            <button type="button" className="filter-btn magic-hover magic-hover__square" data-filter=".Development">Development</button>
                                            <button type="button" className="filter-btn magic-hover magic-hover__square" data-filter=".UI-Design">UX/UI Design</button>
                                        </div>
                                    </div>
                                    <div className="grid portfoliosss">
                                        <div className="col-lg-6 UX/UI-Design Branding">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x236" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">List of Brands</a>
                                                    <p>Digital Web</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 UX/UI-Design Branding">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x353" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">List of Brands</a>
                                                    <p>Digital Web</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 Design Development">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x236" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">Creative Studio</a>
                                                    <p>Website Design &amp; Development</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 Branding">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x236" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">Mice Goofballs.</a>
                                                    <p>Branding</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6  Branding Development UI-Design">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x353" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">Mobile Development</a>
                                                    <p>Digital Web</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 Design UI-Design ">
                                            <div className="portfolio-detail">
                                                <div className="portfolio-img hover06">
                                                    <figure>
                                                        <img alt="profile img" src="https://via.placeholder.com/318x236" />
                                                    </figure>
                                                    <a className="magic-hover magic-hover__square" href="portfolio-details-1.html">Grid Mockup</a>
                                                    <p>Motion</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load-button">
                                        <a href="#" className="button button--moema button--text-thick button--text-upper button--size-s"><i className="fa-solid fa-spinner" /> Load More</a>
                                    </div>
                                    <div className="award headings">
                                        <h3>Award Achievement</h3>
                                        <div className="award-data">
                                            <img alt="customer" src="https://via.placeholder.com/141x83" />
                                            <h2>31</h2>
                                            <h6>7 SOTD<br />
                                                17 HONORABLE MENTION<br />
                                                3 MOBILE EXCELLENCE</h6>
                                        </div>
                                        <div className="award-data">
                                            <img alt="customer" src="https://via.placeholder.com/141x83" />
                                            <h2>18</h2>
                                            <h6>Award 2023<br />
                                                1 Global Competition</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="tab-5" className="gap news tab js-tabs-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="heading news-gap">
                                        <h1>N</h1>
                                        <h3>news</h3>
                                    </div>
                                    <div className="news-img">
                                        <img alt="news-img" src="https://via.placeholder.com/400x242" />
                                        <div className="news-data">
                                            <p>Digital Marketing, Marketing</p>
                                            <a className="magic-hover magic-hover__square" href="blog-details-1.html">Everything You Need to Know
                                                About Marketing</a>
                                            <div className="news-img-girl">
                                                <img alt="girl" src="https://via.placeholder.com/60x60" />
                                                <div>
                                                    <h6>December 25, 2023</h6>
                                                    <p>Elena Hachaturianc</p><p>
                                                    </p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-img">
                                        <div className="news-data gapp">
                                            <p>Digital Marketing, Marketing</p>
                                            <a className="magic-hover magic-hover__square" href="blog-details-1.html">Summary of Personal and
                                                Business Experiences</a>
                                            <div className="news-img-girl">
                                                <img alt="girl" src="https://via.placeholder.com/60x60" />
                                                <div>
                                                    <h6>December 25, 2023</h6>
                                                    <p>Elena Hachaturianc</p><p>
                                                    </p></div>
                                            </div>
                                        </div>
                                        <img alt="news-img" src="https://via.placeholder.com/400x242" />
                                    </div>
                                    <div className="news-img">
                                        <img alt="news-img" src="https://via.placeholder.com/400x242" />
                                        <div className="news-data">
                                            <p>Digital Marketing, Marketing</p>
                                            <a className="magic-hover magic-hover__square" href="blog-details-1.html">Creating a Better IT Business
                                                Solutions</a>
                                            <div className="news-img-girl">
                                                <img alt="girl" src="https://via.placeholder.com/60x60" />
                                                <div>
                                                    <h6>December 25, 2023</h6>
                                                    <p>Elena Hachaturianc</p><p>
                                                    </p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-img">
                                        <div className="news-data gapp">
                                            <p>Digital Marketing, Marketing</p>
                                            <a className="magic-hover magic-hover__square" href="#">How to find your first job
                                                out of college</a>
                                            <div className="news-img-girl">
                                                <img alt="girl" src="https://via.placeholder.com/60x60" />
                                                <div>
                                                    <h6>December 25, 2023</h6>
                                                    <p>Elena Hachaturianc</p><p>
                                                    </p></div>
                                            </div>
                                        </div>
                                        <img alt="news-img" src="https://via.placeholder.com/400x242" />
                                    </div>
                                    <div className="news-img lest">
                                        <img alt="news-img" src="https://via.placeholder.com/400x242" />
                                        <div className="news-data">
                                            <p>Digital Marketing, Marketing</p>
                                            <a className="magic-hover magic-hover__square" href="blog-details-1.html">Creating a Better IT Business
                                                Solutions</a>
                                            <div className="news-img-girl">
                                                <img alt="girl" src="https://via.placeholder.com/60x60" />
                                                <div>
                                                    <h6>December 25, 2023</h6>
                                                    <p>Elena Hachaturianc</p><p>
                                                    </p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load-button">
                                        <a href="#" className="button button--moema button--text-thick button--text-upper button--size-s"> load more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="tab-6" className="gap contact tab js-tabs-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="heading">
                                        <h1>C</h1>
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-info">
                                                <div className="headings">
                                                    <h3>Contact Info</h3>
                                                </div>
                                                <h6>We would love to chat. Why not give us a call?</h6>
                                                <a className="magic-hover magic-hover__square" href="callto:+1234483060">1234483060</a>
                                                <a className="mail" href="mailto:username@domainname.com">username@domainname.com</a>
                                                <h5>Street No 25, New Town 7896 Fa,
                                                    San Francisco</h5>
                                                <h4>Monday-Friday:<span>  10am - 9 PM</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-have">
                                                <div className="headings">
                                                    <h3>Have Question?</h3>
                                                </div>
                                                <form>
                                                    <input type="text" name="Complete" placeholder="Complete Name" />
                                                    <input type="text" name="Email-Address" placeholder="Email Address" />
                                                    <input type="text" name="Phone" placeholder="Phone No" />
                                                    <textarea placeholder="Message" defaultValue={""} />
                                                    <button className="button button--moema button--text-thick button--text-upper button--size-s">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* popup */}
            <div className="backdrop" />
            <div className="box">
                <div className="flex-img">
                    <img alt="popup-img" src="img/orix-popup.jpg" />
                    <div className="your-name">
                        <h5>Have Question?</h5>
                        <form className="one">
                            <input type="text" name="YourName" placeholder="Your Name *" />
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" name="Email" placeholder="Your Email *" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" name="Phone" placeholder="Phone No *" />
                                </div>
                            </div>
                            <select className="nice-select Advice">
                                <option>Select Topic</option>
                                <option>Select Topic 1</option>
                                <option>Select Topic 2</option>
                                <option>Select Topic 3</option>
                            </select>
                            <textarea defaultValue={"Your Message *"} />
                            <button className="button button--moema button--text-thick button--text-upper button--size-s">Send Message</button>
                        </form>
                    </div>
                    <div className="close"><i className="fa-solid fa-xmark" /></div>
                </div>
            </div>
        </div>
    );
}
