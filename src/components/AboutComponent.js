import React from "react";
import One from "../asset/one.png";

export default function AboutComponent() {
  return (
    <div className="about ">
      <div className="row">
        <h4 className="font">
          <b>Why ZERO?</b>
        </h4>
        <div className="col s12 m3">
          <img className="responsive-img" src={One} alt="bg" width="150px" />
          <h5 className="font">No minimum Order</h5>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b></b>
          </h6>
        </div>
        <div className="col s12 m3">
          <img className="responsive-img" src={One} alt="bg" width="150px" />
          <h5 className="font">Available 24x7</h5>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b></b>
          </h6>
        </div>
        <div className="col s12 m3">
          <img className="responsive-img" src={One} alt="bg" width="150px" />
          <h5 className="font">Delivered in 45 mins</h5>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b></b>
          </h6>
        </div>
        <div className="col s12 m3">
          <img className="responsive-img" src={One} alt="bg" width="150px" />
          <h5 className="font">Reliable</h5>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b></b>
          </h6>
        </div>
      </div>
    </div>
  );
}
