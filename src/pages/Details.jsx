import React from "react";
import { useParams } from "react-router-dom";
import dataset from "../assets/data.json";
import img from "../assets/1.jpg";

export default function Detail() {
  let { id } = useParams();

  return (
    <div className="flex justify-center">
      {dataset.map((item) => {
        return (
          item.product_id == id && (
            <div className="flex border px-24 card">
              <img className="w-[40%]" src={img} alt={item.name} />
              <div className="flex-1 p-3">
                <p className="text-gray-500">{item.product_id}</p>
                <h1 className="text-2xl font-extrabold">{item.name}</h1>
                <h3 className="text-primary font-semibold">Ghs {item.price}</h3>
                <p>{item.category}</p>

                <input placeholder="sdjsjd" />
                <h1>{item.description}</h1>
              </div>
            </div>
          )
        );
      })}
    
    </div>
  );
}
