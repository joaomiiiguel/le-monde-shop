import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

import ProductImage from '../../../../public/product1.png'
import { ButtonOutline } from "../Button";

const CardProduct = (props: Props) => {
  return (
    <Link href={'#'} className="w-full max-w-md">
      <div className="bg-gray-light rounded-xl w-full flex justify-center py-10">
        <Image src={ProductImage} alt="Product" />
      </div>
      <div className="space-y-2">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-semibold">Product Name</p>
          <p className="text-xl font-semibold">299</p>
        </div>
        <p className="w-10/12 text-sm text-gray opacity-70">Headphone Wireless com Microfone e Gerenciamento de chamadas</p>
        <ButtonOutline handleClick={() => {}}>Ajouter au panier</ButtonOutline>
      </div>
    </Link>
  );
};

export default CardProduct;
