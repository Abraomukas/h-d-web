import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import Cookies from "js-cookie";
import { Trans, useTranslation } from "react-i18next";

export default function Hero() {
  const cld = new Cloudinary({ cloud: { cloudName: "abraomukas" } });

  const currentLngCode = Cookies.get("i18next") || "es";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const imageUrl = cld
    .image("h-d-web/jan-24")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(width).height(height))
    .toURL();

  useTranslation();

  const values = [
    { icon: "fa-solid fa-person", tag: "diversity", to: "" },
    { icon: "fa-solid fa-users", tag: "trust", to: "" },
    { icon: "fa-solid fa-stopwatch", tag: "productivity", to: "" },
  ];

  return (
    <div>
      {/* COVER IMAGE WITH MESSAGE */}
      <section>
        <div className="container-fluid px-5 py-5">
          <img src={imageUrl} className="img-fluid" />
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <div
          style={{ minHeight: "100vh" }}
          className="container-fluid px-5 pb-5"
        >
          <div className="row">
            <div className="container-fluid text-center">
              <h1 className="display-7 fw-bold lh-1 mb-3">
                <Trans i18nKey={"hero.timeline-header"} />
              </h1>
            </div>
            <div className="row ">
              <div
                className="col-lg-4 col-md-12"
                style={{ backgroundColor: "red" }}
              ></div>

              <div
                className="col-lg-4 col-md-6"
                style={{ backgroundColor: "green" }}
              ></div>

              <div
                className="col-lg-4 col-md-6"
                style={{ backgroundColor: "blue", minHeight: "100vh" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Services */}
      <section>
        <div style={{ minHeight: "100vh" }}></div>
      </section>
    </div>
  );
}
