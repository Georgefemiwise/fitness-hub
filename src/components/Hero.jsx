import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/1.jpg"; // images for the hero background

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${img})`, //background used
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              {/* you can change this to describe your business */}
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              
              <Link to={"products"} className="btn btn-primary">
                Get started now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
