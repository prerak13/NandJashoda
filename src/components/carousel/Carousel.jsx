import React from "react";

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "500px",
  height: "auto",
  width: "100%",
};

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={imageStyle}
            src="https://drive.google.com/thumbnail?id=1Z1wTURAT4NH30F7WJCA931uh10hvNWDu&sz=w1000"
            className="d-block"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            style={imageStyle}
            src="https://drive.google.com/thumbnail?id=1jfz5gAFjgoOTOtuaDZWZHNIU3n7idskv&sz=w1000"
            className="d-block"
            alt="Slide 2"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        style={{ left: "-55px" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        style={{ right: "-55px" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
