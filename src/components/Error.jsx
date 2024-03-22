import React from 'react'
import error from "./img/404.png"

export default function Error({ data }) {
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
              <img alt={404} src={error} />
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

        </div>
      </section>
    </div>
  )
}
