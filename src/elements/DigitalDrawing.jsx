import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Breadcrumb from "../elements/common/Breadcrumb";

class DigitalDrawing extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Digital Drawing" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Digital Drawing"} />
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>LSMFT</h2>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src="https://i.imgur.com/HXpUfSd.png"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>Eskew Reeder</h2>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src="https://i.imgur.com/jEL24cX.jpg"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>Morro Bay</h2>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src="https://i.imgur.com/avgKbfa.jpg"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>Parts Design with SolidWorks</h2>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src="https://i.imgur.com/vs4q0IZ.png"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <FooterTwo />
      </React.Fragment>
    );
  }
}
export default DigitalDrawing;
