// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
import Home from "./home/Home";

// Element Layout

import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";
import DigitalDrawing from "./elements/DigitalDrawing";

import ProductDesign from "./elements/ProductDesign";

// Blocks Layout

import Portfolio from "./blocks/Portfolio";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// import Photography from "./elements/Photography";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />

            {/* Element Layout */}

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={Blog}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/digitaldrawing`}
              component={DigitalDrawing}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/productdesign`}
              component={ProductDesign}
            />
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/photography`}
              component={Photography}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            />

            {/* Blocks Elements  */}

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
