import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, desc, name, category, price, qty }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <div className="flex items-center justify-between">
          <Link to={`detail/${id}`} className="card-title">{name}</Link>
          <div className="badge badge-sm badge-outline">{category}</div>
        </div>

        <p>{desc.substring(0, 50) + "..."}</p>
        <div className="card-actions justify-between items-center">
          <button className="btn btn-primary btn-sm">Buy Now</button>
          <div className="font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
}
