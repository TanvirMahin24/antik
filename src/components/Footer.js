import React, { Fragment } from "react";
import "./Footer.scss";
import Form from "./Form";

const Footer = () => (
  <Fragment>
    <div id="contactWrapper">
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title ">
                <h2 className="titleContact pt-4">Get In Touch</h2>
                <div className="hrLine"></div>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <Form />
            </div>

            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item text-md-left text-center">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  Mirpur-12, Dhaka, Bangladesh
                </p>
              </div>
              <div className="contact-item text-md-left text-center">
                <p>
                  <span>
                    <i className="fa fa-globe"></i> Website
                  </span>
                  http://antik-mahmud.com
                </p>
              </div>
              <div className="contact-item text-md-left text-center">
                <p>
                  <span>
                    <i className="fas fa-envelope-open"></i> Email
                  </span>
                  mahathirmahmudantik@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social mx-auto">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/originalantik">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/being_antik/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/antikmahmud">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container text-center pb-4">
              <span className="lead">
                &copy; 2020 Developed by{" "}
                <a
                  href="http://tanvirmahin24.github.io"
                  rel="nofollow"
                  className="text-light font-weight-bold"
                >
                  Tanvir Mahin
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Footer;
