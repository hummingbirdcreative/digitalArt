import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

const image1 = "https://i.imgur.com/ohx3Qlb.jpg";

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "August Graybosch",
    description: "Interdisciplinary Artist",
    buttonText: "Let's Connect",
    buttonLink: "/contact",
  },
];

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet pageTitle="Creative Agency" />
        <Header logo="light" />
        {/* Start Slider Area   */}
        <div className="slider-activation slider-creative-agency">
          <Parallax bgImage={image1} strength={50}>
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title theme-gradient">
                            {value.title}
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Parallax>
        </div>
        {/* End Slider Area   */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default Home;
