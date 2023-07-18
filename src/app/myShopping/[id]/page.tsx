"use client";
import React from "react";
import Layout from "../../../@core/layout";
import ListItem from "@/app/myShopping/_components/ListItem";
import Product2 from "../../../../public/price.webp";
import Product3 from "../../../../public/product3.webp";

export default function MyShoppingPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className=" pt-28 pb-6 px-10 xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-20 1xl:px-80 2xl:px-80 3xl:px-80 xl:w-3/5">
          <h1 className="font-semibold text-2xl ">Achats</h1>
          <ListItem
            imgProduct={Product2}
            title="Prise Intelligente WiFi 16A"
            sendDate="15 juillet"
            total="29.26€"
            units="2 unités | 16A EU PLUG"
            arrivalDate="Le 19 juillet est arrivé"
          />
          <ListItem
            imgProduct={Product2}
            title="Prise Intelligente WiFi 16A"
            sendDate="15 juillet"
            total="14,63€"
            units="1 unités | 16A Brazil PLUG"
            arrivalDate="Le 19 juillet est arrivé"
          />
          <ListItem
            imgProduct={Product3}
            title="Rechargez votre iPhone 13"
            sendDate="15 juillet"
            total="4,9€"
            units="1 unités | Pure white 5000mAh"
            arrivalDate="Le 21 juillet est arrivé"
          />
        </div>
      </div>
    </Layout>
  );
}
