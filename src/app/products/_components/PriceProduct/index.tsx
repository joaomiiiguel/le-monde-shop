import React from "react";

type Props = {
  valuePrice: string;
  descontPrice: string;
};

export default function PriceProduct({ valuePrice, descontPrice }: Props) {
  const newPrice = valuePrice.indexOf(".");
  return (
    <div>
      <p className="text-sm font-semibold opacity-30 line-through">€{valuePrice}</p>
      <div className="flex flex-row items-start space-x-1">
        <p className="text-sm font-semibold">€</p>
        <p className="text-5xl font-semibold">
          {descontPrice.substring(0, newPrice)}
        </p>
        <p className="text-xl font-semibold">{descontPrice.substring(3)}</p>
      </div>
    </div>
  );
}
