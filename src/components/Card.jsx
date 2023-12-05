import React from "react";
import { Link } from "react-router-dom";
import { img1 } from "../assets";



export default function Card({ id, desc, name, category, price, img }) {
  
 console.log(img);

  
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure
        className="px-10 pt-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <div className="flex items-center justify-between">
          <h3 className="card-title">{name}</h3>
          <div className="badge badge-sm badge-outline">{category}</div>
        </div>

        <p>{desc.substring(0, 50) + "..."}</p>
        <div className="card-actions justify-between items-center">
          <Link to={`/detail/${id}`} className="btn btn-primary btn-sm">
            View
          </Link>
          <div className="font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
}

