"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

type ListItemProps = {
  imgProduct: StaticImageData;
  title?: string;
  total?: string;
  units?: string;
  arrivalDate?: string;
  sendDate?: string;
};

export default function ListItem({ imgProduct, title, total, units, arrivalDate, sendDate }: ListItemProps) {
  return (
    <div className="pt-6 flex flex-col justify-center w-500 inset-0 mx-auto">
      <div className="bg-gray-400 rounded-lg border border-slate-700	 md:h-500">
        <div className="border-b border-slate-700	 p-4 flex pl-100">
          <div className="">
            <p className="text-sm">COMMANDE PASSÉE</p>
            <p className="text-sm">{sendDate}</p>
          </div>
          <div className="pl-1xl ml-10">
            <p className="text-sm">TOTAL</p>
            <p className="text-sm">{total}</p>
          </div>
        </div>
        <div className=" flex justify-between p-4 flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-rowxs:p-0 h-200 xl:h-1000">
          <div className="flex align-center items-center sm:items-start md:items-start lg:items-start xl:items-start 2xl:flex-col flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
            <Image
              src={imgProduct}
              alt="Product"
              className="w-40 sm:w-30 md:w-30 lg:w-40 xl:w-50 2xxl:w-60 pr-4"
            />
            <div className="p-0 px-0 xs:pr-4 sm:pr-4 md:pr-4 lg:pr-4 xl:pr-4  xs:pl-4 sm:pl-4 md:pl-4 lg:pl-4 xl:pl-4  max-w-xs max-w-230 w-full mb-4">
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-sm font-normal">{arrivalDate}</p>
              <p className="text-sm font-normal">{units}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-30 sm:h-30 md:h-20 xl:h-20 2xl:h-20 md:mb-5">
            <button className="mb-4 py-2 px-5 xl:px-10 lg:px-10 md:px-10 sm:px-10 xs:px-10 w-full bg-gradient-to-l from-primary-light to-primary rounded-full text-gray-light hover:bg-opacity-80 transition delay-100 duration-200 ease-in-out ">Voir l'achat</button>
            <button className=" py-2 px-10 w-full rounded-full bg-transparent border border-gray-dark hover:border-primary hover:text-primary text-gray-dark hover:bg-opacity-10 hover:bg-primary transition delay-100 duration-200 ease-in-out active:bg-primary z-10">Acheter à nouveau</button>
          </div>
        </div>
      </div>
    </div>
  );
}