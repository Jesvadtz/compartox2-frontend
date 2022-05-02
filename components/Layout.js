import Head from "next/head";
import { Container } from "@mui/material";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
  showNavbar = true,
  showFooter = true,
}) {
  return (
    <>
      <Head>
        <title>Comparto X2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showNavbar && <Navbar />}
      <Container maxWidth="lg" disableGutters>
        {children}
      </Container>
      {showFooter && <Footer />}
    </>
  );
}
