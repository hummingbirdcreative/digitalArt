import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Breadcrumb from "../elements/common/Breadcrumb";

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Contact"} />
        {/* <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Contact</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiPhone />
                  </div>
                  <div className="inner">
                    <h4 className="title">Phone Number</h4>
                    <p>
                      <a href="tel:+808 720 0076">(808) 720-0076</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email Address</h4>
                    <p>
                      <a href="mailto:august@otisamp.com">august@otisamp.com</a>
                    </p>
                    {/* <p>
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </p> */}
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p>
                      Kauai, HI <br />
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        {/* <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div> */}
        {/* End Contact Page Area  */}

        {/* Start Contact Map  */}
        {/* <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div> */}
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

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
export default Contact;
