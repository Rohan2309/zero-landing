import React, { Component } from "react";
import bg from "../asset/bg.png";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <img
            className="responsive-img"
            src={bg}
            alt="Zero"
            width="450"
            height="450"
          />
        </div>
        <div className="col s12 m6">
          <h4 className="font">
            <b></b>
          </h4>
          <h1 className="title #2196f3 blue-text text-darken-3" id="about">
            ZERO{" "}
          </h1>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6 className="font">
            <b>Shop with us Today</b>
          </h6>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <a
            href="#get"
            className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 modal-trigger"
            data-target="modal1"
          >
            Know more
          </a>
        </div>

        <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id="modal1"
            className="modal"
          >
            <div className="modal-content">
              <h4 className="font">ABOUT THE APP!</h4>
              <p className="para">
                Thanks For You Concern, but we're under development! Thanks For
                You Concern, but we're under development! Thanks For You
                Concern, but we're under development! Thanks For You Concern,
                but we're under development! Thanks For You Concern, but we're
                under development! Thanks For You Concern, but we're under
                development! Thanks For You Concern, but we're under
                development! Thanks For You Concern, but we're under
                development! Thanks For You Concern, but we're under
                development!
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="#close"
                className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 modal-close "
              >
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
