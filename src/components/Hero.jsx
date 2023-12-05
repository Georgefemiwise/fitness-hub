import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/1.jpg"; // Image for the hero background

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="mb-5">
                Welcome to <span className="text-primary">Fitness Hub</span>, your gateway to a healthier
                and stronger you. Unleash your potential with our tailored
                fitness programs designed to elevate your mind, body, and
                spirit.
              </p>

              <Link to={"products"} className="btn btn-primary">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
