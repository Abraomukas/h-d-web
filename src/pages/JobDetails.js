import React from "react";
import Cookies from "js-cookie";
import { Trans, useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Placeholder from "../components/Placeholder";

function JobDetails() {
  useTranslation();

  const currentLngCode = Cookies.get("i18next") || "es";
  const { job } = useParams();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />

      <div className="container-fluid">
        {/* HEADER */}
        <div className="position-relative p-5 p-md-1 m-md-1 text-center">
          <div className="col-md-6 p-lg-5 mx-auto mt-3">
            <h1 className="display-3 fw-bold">
              <Trans i18nKey={`careers.${job}.header`} />
            </h1>
          </div>
        </div>
        {/* INTRO */}
        <section>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row d-flex justify-content-around align-items-center py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <Placeholder width={500} height={400} />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  <Trans i18nKey={"hero.header"} />
                </h1>
                <p className="lead">
                  <Trans i18nKey={"hero.subheader"} />
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* STACK */}
        <section>
          <div className="position-relative p-5 p-md-1 m-md-1 text-center">
            <h1 className="display-5 fw-bold">
              <Trans i18nKey={`careers.${job}.stack.header`} />
            </h1>
          </div>
        </section>
        {/* CAREER BENEFITS */}
        <section>
          <div className="position-relative p-5 p-md-1 m-md-1 text-center">
            <h1 className="display-5 fw-bold">
              <Trans i18nKey={`careers.career-benefits.header`} />
            </h1>
          </div>
        </section>
        {/* SOCIAL BENEFITS */}
        <section>
          <div className="position-relative p-5 p-md-1 m-md-1 text-center">
            <h1 className="display-5 fw-bold">
              <Trans i18nKey={`careers.social-benefits.header`} />
            </h1>
          </div>
        </section>
        {/* SEND ME YOUR CV */}
        <section>
          <div className="position-relative p-5 p-md-1 m-md-1 text-center">
            <button type="button" className="btn btn-large btn-primary">
              <Trans i18nKey={`careers.submit_cv`} />
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default JobDetails;
