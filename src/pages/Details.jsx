import React from "react";
import { useParams } from "react-router-dom";
import dataset from "../assets/data.json";
import img from "../assets/1.jpg";

export default function Detail() {
  let { id } = useParams();

  return (
    <div className="grid place-content-center  w-screen b h-screen ">
      {dataset.map((item) => {
        return (
          item.product_id == id && (
            <div className="card card-side bg-base-200 shadow-xl max-w-5xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <p className="text-gray-500">{item.product_id}</p>

                <h1 className="card-title text-2xl font-extrabold">
                  {item.name}
                </h1>
                <div className="flex justify-between w">
                  <h3 className="text-primary font-semibold">
                    Ghs {item.price}
                  </h3>
                  <p>{item.category}</p>
                </div>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">What is your name?</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                <p className="dark:text-gray-600 "> {item.description}</p>
                <div className="card-actions justify-end g-5">
                  <button className="btn btn-outline ">
                    back
                  </button>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
