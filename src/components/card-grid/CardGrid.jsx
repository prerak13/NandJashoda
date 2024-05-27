import React from "react";

const CardGrid = () => {
  const cards = [
    {
      imgSrc:
        "https://drive.google.com/thumbnail?id=1S_P7Ol_J1zJgYNXYqUeEIN-_DC9x5M46",
      alt: "Earrings",
      title: "Earrings",
    },
    {
      imgSrc:
        "https://drive.google.com/thumbnail?id=1S_P7Ol_J1zJgYNXYqUeEIN-_DC9x5M46",
      alt: "Ring",
      title: "Ring",
    },
    {
      imgSrc:
        "https://drive.google.com/thumbnail?id=1v3-y1XabPYCgnPe33tTHRmbmM0H0N2dU",
      alt: "Pendant",
      title: "Pendant",
    },
    {
      imgSrc:
        "https://drive.google.com/thumbnail?id=1S_P7Ol_J1zJgYNXYqUeEIN-_DC9x5M46",
      alt: "Necklace",
      title: "Necklace",
    },
  ];

  return (
    <div className="row mt-4">
      {cards.map((card, index) => (
        <div className="col-md-3" key={index}>
          <div className="card">
            <img
              src={card.imgSrc}
              className="card-img-top"
              alt={card.alt}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body text-center" style={{ height: "100px" }}>
              <h5 className="card-title">{card.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
