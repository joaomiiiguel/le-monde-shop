import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonOutline } from "../Button";
import PriceValue from "./priceValue";

import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/slices/cartSlice";
import { ItemCart } from "@/redux/types";

interface IProductsDetails {
  description: string;
  handle: string;
  key: React.Key;
  imagesCover: string;
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
  const dataRedux = useSelector((state: any) => state);
  const dispatch = useDispatch();

  function addToCart() {
    console.log( typeof imagesCover)
    const newItem: ItemCart = {
      id: key,
      nameProduct: title,
      imagesCover: imagesCover,
      price: price,
      amount: 1,
    };

    dispatch(addtoCart(newItem));
  }

  return (
    <div
      className="flex flex-col justify-between items-stretch w-fit h-[500px] space-y-2"
      key={key}
    >
      <Link
        href={`/products/${handle}`}
        className="flex flex-col h-full justify-between"
      >
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
      <ButtonOutline handleClick={() => addToCart()}>
        Ajouter au panier
      </ButtonOutline>
    </div>
  );
};

export default CardProduct;
