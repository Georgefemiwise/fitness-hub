import React, { useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import dataset from "../assets/data.json";
import img from "../assets/1.jpg";

export default function Detail() {
  // get the id of the product from url
  let { id } = useParams();

  //find the product using the id
  const data = dataset.find((item) => item.product_id == id);

  // quantity  is set to 0 by default
  const [count, setCount] = useState(0);

  //ad and remove func for quantity
  const add = () => setCount(count + 1);
  const del = () => {
    // prevent qty rrom entering a negative number
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="grid place-content-center  w-screen  h-screen ">
      <div key={id} className="card card-side bg-base-200 shadow-xl p-10">
        <figure className="min-w-xl max-w-xl">
          <img
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <p className="text-gray-500">
            {[data.name.replace(" ").toUpperCase(), data.product_id * 3]}
          </p>

          <div className="flex items-center flex-right bg-red-1e00">
            <h1 className="card-title text-2xl font-extrabold">{data.name}</h1>
            <p className="ml-16 badge badge-accent badge-lg w-fit">
              {data.category}
            </p>
          </div>
          <p className="text-primary font-semibold ">Ghs {data.price}</p>

          <label className="form-control w-full max-w-xs">
            <div className="flex gap-2">
              {/* add qty value by ` */}
              <button className="btn btn-primary text-2xl" onClick={add}>
                +
              </button>
              <input
                type="text"
                className="input input-bordered w-14 max-w-xs"
                value={count}
                readOnly
              />
              {/* delete qty value by 1 */}
              <button className="btn btn-primary text-2xl" onClick={del}>
                -
              </button>
            </div>
          </label>

          <p className="dark:text-gray-600 "> {data.description}</p>
          <div className="card-actions justify-end g-5">
            <Link className="btn btn-outline " to={"/products"}>
              back
            </Link>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
