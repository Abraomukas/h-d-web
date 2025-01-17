import React from "react";
import Cookies from "js-cookie";
import { Trans, useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { Resize } from "@cloudinary/url-gen/actions/resize";

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EventDetails() {
  useTranslation();
  const cld = new Cloudinary({ cloud: { cloudName: "abraomukas" } });

  const currentLngCode = Cookies.get("i18next") || "es";
  const { event } = useParams();

  let imageUrl = cld
    .image(`h-d-web/${event}`)
    .format("auto")
    .quality("auto")
    .resize(Resize.scale().width(500).height(500))
    .resize(Resize.crop().width(1000).height(1000).gravity("auto"))
    .toURL();

  return (
    <div>
      <Navbar />

      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* CAROUSEL */}

        <div className="container-fluid w-75 mt-5">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <img src={imageUrl} className="d-block w-50" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <img src={imageUrl} className="d-block w-50" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <img src={imageUrl} className="d-block w-50" alt="..." />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* HEADER */}

        <div className="position-relative p-5 p-md-1 m-md-1 text-center">
          <div className="col-md-6 p-lg-5 mx-auto mt-3">
            <h1 className="display-3 fw-bold">
              <Trans i18nKey={`events.${event}.header`} />
            </h1>

            <br />
            <br />

            <p className="fs-5 text-start">
              <Trans i18nKey={`events.${event}.content`} />
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EventDetails;
