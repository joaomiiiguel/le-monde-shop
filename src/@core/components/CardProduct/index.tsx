import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonOutline } from "../Button";
import PriceValue from "./priceValue";

interface IProductsDetails {
  description: string;
  handle: string;
  key: React.Key;
  imagesCover: HTMLImageElement | string;
  title: string;
  price: ReactNode;
  currency: string;
}

const CardProduct = ({
  key,
  description,
  handle,
  title,
  price,
  currency,
  imagesCover,
}: IProductsDetails) => {
  return (
    <div className="flex flex-col justify-between items-stretch w-fit h-[500px] space-y-2" key={key}>
      <Link href={`/products/${handle}`} className="flex flex-col h-full justify-between">
        <div className="border border-gray-light hover:opacity-70 rounded-xl w-full flex max-h-[300px] justify-center h-4/6 overflow-hidden items-center">
          <Image
            src={imagesCover}
            alt="Product"
            className="w-full"
            width={180}
            height={180}
          />
        </div>
        <div className="flex flex-col justify-around h-2/6 px-2">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-semibold line-clamp-2 w-2/3">{title}</p>
            <PriceValue currentValue={price} currency={currency} />
          </div>
          <p className="w-10/12 text-sm overflow-hidden text-justify text-gray opacity-70 line-clamp-2	">
            {description}
          </p>
        </div>
      </Link>
      <ButtonOutline handleClick={() => console.log("Butão carrinho")}>
        Ajouter au panier
      </ButtonOutline>
    </div>
  );
};

export default CardProduct;
