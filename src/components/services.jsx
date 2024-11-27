import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>HİZMETLERİMİZ</h2>
          <p>
            Alanya Mermer & Seramik, banyo ve mutfak tadilatları, fayans döşeme, mermer kaplama ve dış mekan onarımları gibi kapsamlı hizmetler sunarak, mekanlarınızı estetik ve fonksiyonel açıdan yeniden şekillendiriyor.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <img src={d.image} alt={d.name} className="service-image" />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
