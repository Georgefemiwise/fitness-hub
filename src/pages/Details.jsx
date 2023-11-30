import React from "react";
import { Link, NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import dataset from "../assets/data.json";
import img from "../assets/1.jpg";

export default function Detail() {
  let { id } = useParams();
  const data = dataset.find((item) => item.product_id == id);

  return (
    <div className="grid place-content-center  w-screen b h-screen ">
      <div key={id} className="card card-side bg-base-200 shadow-xl max-w-5xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <p className="text-gray-500">{data.product_id}</p>

          <h1 className="card-title text-2xl font-extrabold">{data.name}</h1>
          <div className="flex justify-between w">
            <h3 className="text-primary font-semibold">Ghs {data.price}</h3>
            <p>{data.category}</p>
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

          <p className="dark:text-gray-600 "> {data.description}</p>
          <div className="card-actions justify-end g-5">
            <Link className="btn btn-outline "  to={'/'}>
              back
            </Link>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
