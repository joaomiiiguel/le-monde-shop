"use client";
import React from "react";
import { client } from "../../../libs/shopify";
import Layout from "../../../@core/layout";
import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CountProduct from "@/app/products/_components/CountProduct";
import PriceProduct from "../_components/PriceProduct";
import { Button, ButtonOutline } from "@/@core/components/Button";

export default function Page({ params }: { params: { id: string } }) {
  const [productsDetail, setProductsDetail] = React.useState<
    ShopifyBuy.ProductResource | any
  >(null);
  const [optionSelected, setOptionSelected] = React.useState<string>("");
  const [countPrice, setCountPrice] = React.useState<number>(0);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const handle = params.id;

  function fetchProductDetail() {
    client.product.fetchByHandle(handle).then((products) => {
      setProductsDetail(products);
      console.log(products);
    });
  }

  const handleChange = (event: SelectChangeEvent) => {
    setOptionSelected(event.target.value as string);
  };

  React.useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <Layout>
      {productsDetail === null ? (
        <div className="flex flex-col w-full justify-center items-center px-20 pt-[100px]">
          <p className="text-2xl font-semibold pb-4">Carregando...</p>
        </div>
      ) : (
        <div className="flex flex-col w-full overflow-hidden justify-between px-20 pt-[100px] space-y-4">
          <div className="flex flex-col md:flex-row w-full justify-between space-x-8">
            <div className="flex flex-col justify-center items-center max-h-[70vh]">
              <Image
                src={productsDetail?.images[0].src}
                alt="Product"
                priority
                className="h-full"
                width={450}
                height={600}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-4">
              <p className="text-2xl font-semibold pb-4">
                {productsDetail?.title}
              </p>
              <div className="flex flex-row items-center">
                <CountProduct
                  totalPrice={countPrice}
                  setTotalPrice={setCountPrice}
                />
                <p className="text-xs opacity-40 ml-10">
                  Plus que 12 articles restants
                </p>
              </div>
              <FormControl size="small">
                <InputLabel id="demo-simple-select-label">Options</InputLabel>
                <Select
                  labelId="select-label-options"
                  id="simple-select-options"
                  value={optionSelected}
                  label="Options"
                  onChange={handleChange}
                >
                  {productsDetail.variants.map(
                    (item: {
                      id: string | null | undefined;
                      title: string | undefined;
                    }) => (
                      <MenuItem key={item.id} value={item.title}>
                        {item.title}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <PriceProduct
                valuePrice={productsDetail.variants[0].price.amount}
                descontPrice={productsDetail.variants[0].compareAtPrice.amount}
              />
              <div className="flex flex-row justify-between space-x-4">
                <Button fullWidth handleClick={() => {}}>
                  Acheter Maintenant
                </Button>
                <ButtonOutline fullWidth handleClick={() => {}}>
                  Ajouter au panier
                </ButtonOutline>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            <div className="p-4 border border-gray border-opacity-30 rounded-lg">
              <p className="text-lg font-semibold text-primary mb-4">Description</p>
              <p>{productsDetail.description}</p>
            </div>
            <div className="p-4 border border-gray border-opacity-30 rounded-lg">
              <p className="text-lg font-semibold text-primary mb-4">Spécifications Techiniques</p>
              <p>{productsDetail.description}</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-2xl">Produits Connexes</p>
          </div>
        </div>
      )}
    </Layout>
  );
}
