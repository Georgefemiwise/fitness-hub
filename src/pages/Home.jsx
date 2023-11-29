import React from "react";
import { useState } from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import dataset from "../assets/data.json";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {
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
    <div className="w-screen p-0 m-0">
      <Hero />
      <Section>{data()}dd</Section>
      <Link h>hello</Link>
    </div>
  );
}
