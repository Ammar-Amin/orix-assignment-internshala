import React from 'react'

export default function Footer({ data }) {
    return (
        <footer className="gap" style={{ backgroundImage: 'url(./img/footer.png)' }}>
            <div className="container">
                <div className="footer-data">
                    <img alt="log" src="img/orix-logo.png" />
                    <p>{data.about.subTitle}</p>
                    <ul className="social-media-footer">
                        <li><a className="magic-hover magic-hover__square" href={data.social_handles[3].url}><i className="fa-brands fa-facebook-f fb" />Facebook</a></li>
                        <li><a className="magic-hover magic-hover__square" href={data.social_handles[2].url}><i className="fa-brands fa-twitter tw" />Twitter</a></li>
                        <li><a className="magic-hover magic-hover__square" href={data.social_handles[1].url}><i className="fa-brands fa-vimeo-v vi" />Vimeo</a></li>
                        <li><a className="magic-hover magic-hover__square" href={data.social_handles[0].url}><i className="fa-brands fa-linkedin-in in" />Linked In</a></li>
                    </ul>
                    <h6>© 2022 CV Resume<i className="fa-solid fa-heart" />By Winsfolio, All Rights Reserved</h6>
                </div>
            </div>
        </footer>
    )
}
