"use client";
import { Grid } from "@mui/material";
import Layout from "../../@core/layout";
import { Suspense } from "react";

export const LoadingComp = () => {
    return (
        <p>Loading...</p>
    )
}

const ProfilePage = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingComp />}>
        <Grid container sx={{ mt: 12 }}>
          <p>Profile</p>
        </Grid>
      </Suspense>
    </Layout>
  );
};
export default ProfilePage;
