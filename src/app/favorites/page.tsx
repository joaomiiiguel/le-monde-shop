"use client";
import { Grid } from "@mui/material";
import Layout from "../../@core/layout";
import { Suspense } from "react";

export const LoadingComp = () => {
    return (
        <p>Loading...</p>
    )
}

const FavoritePage = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingComp />}>
        <Grid container sx={{ mt: 12 }}>
          <p>Favorite</p>
        </Grid>
      </Suspense>
    </Layout>
  );
};
export default FavoritePage;
