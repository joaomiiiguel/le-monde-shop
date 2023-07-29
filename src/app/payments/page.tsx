"use client";
import { Grid } from "@mui/material";
import Layout from "../../@core/layout";
import { Suspense } from "react";

export const LoadingComp = () => {
    return (
        <p>Loading...</p>
    )
}

const PaymentsPage = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingComp />}>
        <Grid container sx={{ mt: 12 }}>
          <p>Payments</p>
        </Grid>
      </Suspense>
    </Layout>
  );
};
export default PaymentsPage;
