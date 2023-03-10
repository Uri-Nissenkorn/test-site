import { Card, Grid, Typography } from "@mui/material";
import Main from "pages/main";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import styles from "./index.css";

const HomeWrapper = styled.div`
  ${styles}
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Main />
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </HomeWrapper>
  );
}
