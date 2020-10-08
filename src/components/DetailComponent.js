import React from "react";
import Detail from "../asset/details.png";

export default function DetailComponent() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h2 className="font">Connect Yourself with us</h2>
            <p className="para">
              There are many variations of passages of Lorem Ipsum available,
              <br /> but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a
              href="https://play.google.com/"
              className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1"
            >
              <i class="fab fa-google-play"></i> Download
            </a>{" "}
            <a
              href="https://www.apple.com/in/ios/app-store/"
              className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1"
            >
              <i class="fab fa-apple"></i> Download
            </a>
          </div>
          <div className="col s12 m6">
            <img className="responsive-img" alt="Zero" src={Detail} />
          </div>
        </div>
      </div>
    </div>
  );
}
