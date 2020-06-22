import React, { Fragment } from "react";
import AntikPic from "../assets/antik.jpg";
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
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/skitto.png"
                  alt="skitto"
                  className="imgItem skitto"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/cartoonpeople.png"
                  alt="skitto"
                  className="imgItem"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/idlc.jpg"
                  alt="skitto"
                  className="imgItem"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/10minschool.jpg"
                  alt="skitto"
                  className="imgItem"
                />
              </div>
            </div>
            <div className="work-with-section">
              <h1 className="text-light pt-5">SOFTWARE SKILLS</h1>
              <div className="img-group">
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/an.png"
                  alt="skitto"
                  className="imgItem"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/ap.png"
                  alt="skitto"
                  className="imgItem"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/ae.png"
                  alt="skitto"
                  className="imgItem"
                />
                <img
                  src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/audacity.jpg"
                  alt="skitto"
                  className="imgItem"
                />
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
              <img
                src="http://antik-mahmud.com/wp-content/themes/antik-mahmud/images/workspace.jpg"
                alt="workspace"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
