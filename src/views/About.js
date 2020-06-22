import React, { Fragment } from "react";
import AntikPic from "../assets/antik.jpg";
import skitto from "../assets/skitto.png";
import cartoonpeople from "../assets/cartoonpeople.png";
import idlc from "../assets/idlc.jpg";
import ten from "../assets/10.jpg";
import ae from "../assets/ae.png";
import an from "../assets/an.png";
import pr from "../assets/pr.png";
import au from "../assets/ad.jpg";
import workspace from "../assets/workspace.jpg";

import "./About.scss";

const About = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row about-bg">
          <div className="col-md-6 text-center leftAboutHeader">
            <img
              src={AntikPic}
              alt="Antik Mahmud"
              className="w-50 rounded-circle antikImgAbout"
            />
            <div className="socialIcons">
              <a href="https://www.facebook.com/originalantik">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/being_antik/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/antikmahmud">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 about-bg-layer ml-auto">
            <div className="">
              <div className="about-content-box">
                <div className="about-heading">
                  <h1>
                    HELLO! <br /> I AM ANTIK MAHMUD
                  </h1>
                  <h3>
                    2D Animator | YouTuber | Comic Book Artist | Writer |
                    Speaker
                  </h3>
                </div>
                <div className="about-txt">
                  <p>
                    Antik Mahmud (Mahathir Mahmud Antik) is the founder & CEO of
                    the animation studio Antik Animated. This is first ever
                    animation studio in Bangladesh which is totally dedicated to
                    make 2D cartoon and comics. Antik Mahmud has been making
                    YouTube content for several years and approached the heart
                    of young generation through creativity and humor. He has
                    also written a book collaborating with Ayman Sadiq, Bhallage
                    Na, which was a Best Seller in 2019’s book fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row about-bg2">
          <div className="col-md-6 col-xs-12 about-bg-layer2 ml-auto">
            <div className="work-with-section">
              <h1 className="text-light">I'VE WORKED WITH</h1>
              <div className="img-group">
                <img src={skitto} alt="skitto" className="imgItem skitto" />
                <img
                  src={cartoonpeople}
                  alt="cartoon people"
                  className="imgItem"
                />
                <img src={idlc} alt="idlc" className="imgItem" />
                <img src={ten} alt="10 minutes school" className="imgItem" />
              </div>
            </div>
            <div className="work-with-section">
              <h1 className="text-light pt-5">SOFTWARE SKILLS</h1>
              <div className="img-group">
                <img src={an} alt="Adobe Animate" className="imgItem" />
                <img src={pr} alt="Premieer Pro" className="imgItem" />
                <img src={ae} alt="After Effect" className="imgItem" />
                <img src={au} alt="audacity" className="imgItem" />
              </div>
            </div>
            <div className="work-with-section pb-5">
              <h1 className="text-light pt-5">WORKSPACE</h1>
              <div className="about-txt">
                <p className="text-light">
                  I have my own studio named "Antik Animated Comic and Animation
                  Studio where I do all of my works. The studio started in
                  December 5th, 2019
                </p>
              </div>
              <img src={workspace} alt="workspace" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
