import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import dataset from "../assets/data.js"

export default function Product() {


  console.log(dataset);
  const data = () => {
    return dataset.map((item) => (
      <Card
        id={item.product_id}
        key={item.product_id}
        name={item.name}
        category={item.category}
        desc={item.description}
        price={item.price}
        img={item.image}
      />
    ));
  };
  return (
    <div className="">
      <Section>{data()}</Section>
    </div>
  );
}
