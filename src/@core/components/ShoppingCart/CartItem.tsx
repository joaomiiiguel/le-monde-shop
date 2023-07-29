// ** React Imports
import { MouseEvent, useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid, { GridProps } from "@mui/material/Grid";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import Image from "next/image";
import { Divider } from "@mui/material";

interface ItemCartProps {
  id: React.Key | string;
  nameProduct: string;
  imgCover?: string;
  price: React.ReactNode | number;
}

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CartItem = (params: ItemCartProps) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ mb: 1, boxShadow: 0 }}>
      <Grid container spacing={3}>
        <StyledGrid item md={5} xs={12}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {params.imgCover && (
              <Image width={130} height={130} src={params.imgCover} alt={params.nameProduct}/>
            )}
          </CardContent>
        </StyledGrid>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography sx={{ mb: 2 }} className="line-clamp-2">
              {params.nameProduct}
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              Price:{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {params.price}
              </Box>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Divider/>
    </Card>
  );
};

export default CartItem;
