import React from 'react'
import Section from "../components/Section";
import Card from "../components/Card";
import dataset from "../assets/data.json";


export default function Product() {
      const data = () => {
        return dataset.map((item) => (
          <Card
            id={item.product_id}
            key={item.product_id}
            name={item.name}
            category={item.category}
            desc={item.description}
            price={item.price}
            qty={item.stock_quantity}
          />
        ));
      };
  return (
    <div>
    
      <Section>{data()}dd</Section>
    </div>
  );
}
