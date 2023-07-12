"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/@core/components/Button";
import CardProduct from "@/@core/components/CardProduct";
import { client } from "@/libs/shopify";
import Image from "next/image";

import ImageGirl from "../../../public/girlCover.png";

type IProducts = {
  description: string;
  handle: string;
  key: React.Key;
  imagesCover: HTMLImageElement | string;
  title: string;
  price: React.ReactNode;
  currency: string;
};

const Homepage = () => {
  const [productsHome, setProductsHome] = useState<IProducts[]>([]);
  const [dateCall, setDateCall] = useState<number>(Date.now());

  function getProducts() {
    client.product.fetchAll().then((products) => {
      console.log(products);
      console.log(products);
      
      const newItems = products.map((product) => {
        return {
          description: product.description,
          handle: product.handle,
          key: product.id,
          imagesCover: product.images[0].src,
          title: product.title,
          price: product.variants[0].price.amount,
          currency: product.variants[0].price.currencyCode,
        };
      });
      console.log(newItems);
      setProductsHome(newItems)
      setDateCall(Date.now());
    });
  }

  useEffect(() => {
    if (productsHome.length === 0 || Date.now() >= dateCall + 60000) {
      getProducts();
    }
  }, [dateCall, productsHome]);

  return (
    <div className="flex flex-col w-full justify-around">
      <div className="flex flex-row w-full items-end justify-around bg-gradient-radial from-primary-light to-primary h-[80vh] pt-[100px] px-20">
        <div className="flex flex-col items-start justify-center w-7/12 max-w-2xl h-full space-y-8">
          <p className="font-semibold w-full text-4xl text-gray-dark">
            Obtenez jusqu&rsquo;à 50% de réduction sur Casque sélectionné
          </p>
          <Button blackColor handleClick={() => console.log("Click Button")}>
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
          {productsHome.map((product) => (
            <CardProduct
              key={product.key}
              description={product.description}
              handle={product.handle}
              imagesCover={product.imagesCover}
              title={product.title}
              price={product.price}
              currency={product.currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Homepage;
