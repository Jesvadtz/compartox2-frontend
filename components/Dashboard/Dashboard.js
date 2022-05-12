import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Container } from "@mui/material";

import Layout from "../Layout";
import Title from "../Title";
import ListItems from "../ListItems/ListItems";
import getUser from "../../services/users/getUser";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");

    if (!userLocalStorage) {
      router.replace("/login");
    } else {
      const updateUser = async () => {
        const userLogin = JSON.parse(userLocalStorage);
        const token = userLogin.token;
        const user = await getUser(token);

        localStorage.setItem("user", JSON.stringify({ token, user }));
        setUser(user);
      };
      updateUser();
    }
  }, []);

  const articleCount = user?.articles?.length;
  const favoritesCount = user?.favorites?.length;

  return (
    <Layout>
      <Container className={styles.dashboard}>
        {user && <Title title={`Hola, ${user?.name} !`} />}
        <ListItems
          articleCount={articleCount}
          favoritesCount={favoritesCount}
        />
      </Container>
    </Layout>
  );
}
