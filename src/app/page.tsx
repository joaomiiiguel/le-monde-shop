"use client";
import Homepage from "../view/homepage";
import Layout from "../@core/layout";
import { AuthProvider } from "../context/AuthContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Homepage />
      </Layout>
    </Provider>
  );
}
