import React from "react";
import Left from "../asset/left.png";
import Right from "../asset/right.png";

export default function FooterComponent() {
  return (
    <footer className="page-footer blue lighten-5">
      <div className="row">
        <h3 className="center title black-text">
          ZERO <i className="i-line"></i>
        </h3>
        <p className="para center black-text">
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration in some form, by
          injected humour. but the majority have suffered alteration in some
          form.
        </p>
        <h6 className="font center black-text">
          <b>Drop Your Information Bellow</b>
        </h6>

        <div className="col m4 s12">
          <img className="responsive-img" src={Left} alt="bg" />
        </div>

        <div className="col m4 s12">
          <div className="card">
            <div className="card-content">
              <div className="input-field one">
                <i className="material-icons prefix #2196f3 blue-text text-accent-3">
                  account_circle
                </i>
                <input id="name" type="text" className="validate" />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix #2196f3 blue-text text-accent-3">
                  mail
                </i>
                <input id="email" type="text" className="validate" />
                <label htmlFor="email">Email ID</label>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <i className="material-icons prefix #2196f3 blue-text text-accent-3">
                        mode_edit
                      </i>
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Message</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-action">
              <a
                href="#subscribe"
                className="btn btn-header white-text text-darken-4 #2196f3 blue accent-3"
              >
                Send Message Now
              </a>
            </div>
          </div>
        </div>

        <div className="col m4 s12">
          <img className="responsive-img" src={Right} alt="bg" />
        </div>
      </div>
      <div className="footer-copyright #2196f3 blue ">
        <div className="container">
          © <b className="font">Copyright 2020 Zero App </b>
          <a className="grey-text text-lighten-4 right" href="#!">
            <i id="i1" className="social-icon fab fa-facebook-f "></i>
            <i id="i1" className="social-icon fab fa-twitter "></i>
            <i id="i1" className="social-icon fab fa-instagram "></i>
            <i id="i1" className="social-icon fas fa-envelope "></i>
            <b>| Designed by Codebugged AI</b>
          </a>
        </div>
      </div>
    </footer>
  );
}
