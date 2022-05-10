import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Layout from "../Layout";
import Title from "../Title";
import ListItems from "../ListItems/ListItems";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    const userData = JSON.parse(userLocalStorage);
    setUser(userData.user);
  }, []);

  const articleCount = user.articles?.length;
  const favoritesCount = user.favorites?.length;

  return (
    <Layout>
      <Container className={styles.dashboard}>
        <Title title={`Hola, ${user?.name} !`} />
        <ListItems
          articleCount={articleCount}
          favoritesCount={favoritesCount}
        />
      </Container>
    </Layout>
  );
}
