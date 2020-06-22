import React from "react";
import { Parallax } from "react-parallax";
import styles from "./ParallaxComponent.module.scss";
import bgImg from "../assets/speaker.jpg";
import shirt from "../assets/shirt.jpg";
import youtube from "../assets/youtube.jpg";

import antikImg from "../assets/bookcartoon1.jpg";

const ParallaxComponent = () => (
  <div style={{ height: "100vh" }}>
    <Parallax
      bgImage={bgImg}
      strength={500}
      renderLayer={(percentage) => (
        <div className="row pt-4 pt-md-0">
          <div className="col-md-5 pt-md-5 pt-0 mt-md-0  text-center">
            <div className="mx-auto pt-md-5 pt-4 mt-3 mt-md-5 mt-md-0 text-center">
              <div
                className={`mx-auto mt-md-4 mt-0  ${styles.imgWrapper}`}
                style={{
                  borderRadius: "50%",
                  width: (1 - percentage) * 510,
                  height: (1 - percentage) * 510,
                }}
              >
                <div className={styles.imgWrapper2}>
                  <img
                    src={antikImg}
                    alt="antik mahmud"
                    className="antikMainImage img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className={`text-center`}>
                <h1 className="font-weight-lighter text-light ">
                  Antik Mahmud
                </h1>
                <h4 className="font-weight-lighter text-light">
                  CEO, Antik Animated
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-7 pt-0 mt-0 pt-md-5 mt-md-5 d-flex d-md-block">
            <div className="pt-md-5 pt-0  mt-5 mt-md-0 ml-auto">
              <div
                className={`ml-auto mt-md-4 mt-0 mr-4  ${styles.imgWrapper}`}
                style={{
                  borderRadius: "50%",
                  width: (1 - percentage) * 210,
                  height: (1 - percentage) * 210,
                }}
              >
                <div className={styles.imgWrapper2}>
                  <a href="https://youtubemerchbd.com/store/antik-mahmud/">
                    <img
                      src={shirt}
                      alt="antik mahmud"
                      className="img-fluid rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-md-5 pt-0 mt-md-0 text-center">
              <div
                className={`ml-auto  mt-md-2 mt-0  mr-4  ${styles.imgWrapper}`}
                style={{
                  borderRadius: "50%",
                  width: (1 - percentage) * 210,
                  height: (1 - percentage) * 210,
                }}
              >
                <div className={styles.imgWrapper2}>
                  <a href="https://www.youtube.com/antikmahmud">
                    <img
                      src={youtube}
                      alt="antik mahmud"
                      className="img-fluid rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: "100vh" }}></div>
    </Parallax>
  </div>
);
export default ParallaxComponent;
