import React from "react";
import Head from "next/head";
import Layout from "../layout/authCard";

import { type NextPage } from "next";
import SignIn from "~/components/SignIn";


const Login: NextPage = () => {
  
  return (
    <Layout>
      <Head>Login</Head>
      <SignIn />
    </Layout>
  );
};

export default Login;
