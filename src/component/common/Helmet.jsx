import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>August Graybosch || Digital Art </title>
          <meta name="description" content="digital art portfolio" />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
