"use client";
import React, { useEffect } from "react";
import { Button } from "@/@core/components/Button";
import CardProduct from "@/@core/components/CardProduct";
import { client } from "@/libs/shopify";
import Image from "next/image";

import ImageGirl from "../../../public/girlCover.png";

const Homepage = () => {

  useEffect(() => {
    client.product.fetchAll().then((products) => {
      console.log(products);
    });
  }, []);
  return (
    <div className="flex flex-col w-full justify-around">
      <div className="flex flex-row w-full items-end justify-around bg-gradient-radial from-primary-light to-primary h-[80vh] pt-[100px] px-20">
        <div className="flex flex-col items-start justify-center w-7/12 max-w-2xl h-full space-y-8">
          <p className="font-semibold w-full text-4xl text-gray-dark">
            Obtenez jusqu&rsquo;à 50% de réduction sur Casque sélectionné
          </p>
          <Button handleClick={() => console.log("Click Button")}>
            Acheter maintenant
          </Button>
        </div>
        <Image
          src={ImageGirl}
          alt="Girl Cover with headset"
          className="w-5/12 h-fit max-w-lg"
        />
      </div>
      <div className="flex flex-col w-full justify-around px-20 py-10">
        <p className="text-2xl font-semibold pb-4">
          Les meilleures offres pour vous
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
