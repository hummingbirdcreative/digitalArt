import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Photography",
    title: "Untitled",
  },
  {
    image: "image-2",
    category: "Photography",
    title: "Transmedium",
  },
  {
    image: "image-3",
    category: "Photography",
    title: "They Live",
  },
  {
    image: "image-4",
    category: "Photography",
    title: "Special Delivery",
  },
  {
    image: "image-5",
    category: "Photography",
    title: "rOt",
  },
  {
    image: "image-6",
    category: "Photography",
    title: "Yellow Submarine",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-details/">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <Link className="link-overlay" to="/portfolio-details"></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
