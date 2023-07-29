import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

type Props = {};

interface ItemCartProps {
  id: React.Key | string;
  nameProduct: string;
  imagesCover: string;
  price: React.ReactNode | number | null;
}

const ShoppingCartContent = (props: Props) => {
  const dataRedux = useSelector((state: any) => state);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const frete = parseFloat((0.15 * totalPrice).toFixed(2));
  const total = totalPrice + frete;

  const router = useRouter()

  function sumAllPrices(data: any) {
    let total = 0;
    for (const item of data) {
      total += parseFloat(item.price);
    }
    return total.toFixed(2);
  }

  useEffect(() => {
    return setTotalPrice(parseFloat(sumAllPrices(dataRedux.cart.items)));
  }, [dataRedux]);

  return (
    <Box
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        paddingTop: 5,
      }}
    >
      {dataRedux.cart.items.length > 0 ? (
        <Box>
          {dataRedux.cart.items.map((item: ItemCartProps) => (
            <CartItem
              id={item.id}
              key={item.id}
              imgCover={item.imagesCover}
              nameProduct={item.nameProduct}
              price={item.price}
            />
          ))}
          <Box sx={{ mx: 2, mb: 2 }}>
            <Box className="flex flex-row">
              <Typography fontWeight={600}>Subtotal</Typography>
              <Typography fontWeight={600} fontSize={20} sx={{ ml: 2 }}>
                €{totalPrice}
              </Typography>
            </Box>
            <Box className="flex flex-row">
              <Typography
                fontWeight={600}
                fontSize={12}
                sx={{ opacity: 0.5, mb: 2 }}
              >
                Frete
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={15}
                sx={{ opacity: 0.5, ml: 2 }}
              >
                €{frete}
              </Typography>
            </Box>
            <Box className="flex flex-row" sx={{ mb: 3 }}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography fontWeight={600} fontSize={20} sx={{ ml: 2 }}>
                €{total.toFixed(2)}
              </Typography>
            </Box>
            <Button handleClick={() => router.replace("/payments")} fullWidth>
              Buy Now
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", marginBottom: 5, textAlign: "center" }}>
          <Typography variant="body1" sx={{ opacity: 0.7 }}>
            Sua sacola está vazia
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            Vá para a página inicial ou procure no site os produtos
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ShoppingCartContent;
