import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  Ambitious full-stack developer, a self-led learner and team
                  player <br></br>
                </p>
                <p className="slide-in-bottom">
                  Currently looking for new opportunities in industry and
                  willing<br></br>
                  to work on challenging and diverse projects with the latest
                  technologies.
                </p>
                <p className="slide-in-bottom">
                  I am passionate and hardworking.<br></br>
                  The technology I've worked on :{" "}
                  <span className="text-red ls-2">
                    Asp.Net Core, Asp.Net Mvc, <br></br>
                    C#, Sql, Html, Css, Js, Bootstrap{" "}
                  </span>
                </p>
                <p className="slide-in-bottom">
                  Currently Learning React Js Library
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="https://static.vecteezy.com/system/resources/previews/013/782/633/non_2x/illustration-of-a-freelancer-working-at-home-with-his-laptop-suitable-for-landing-page-flyers-infographics-and-other-graphic-related-assets-vector.jpg"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
