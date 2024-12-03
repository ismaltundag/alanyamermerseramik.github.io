import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2> MEDYA GALERİ</h2>
          <p>
          Projelerimizden bazılarını keşfedin! Burada, tamamladığımız çalışmaların fotoğraflarını ve videolarını bulabilirsiniz. Her detayda ustalığımızı ve tasarım anlayışımızı yansıttığımız projelerimizle ilham alın. Daha fazla projelerimizi görmek için Instagram hesabımıza göz atın!
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
