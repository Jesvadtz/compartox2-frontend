import { Container } from "@mui/material";

import Layout from "../Layout";
import Title from "../Title";
import ListItems from "../ListItems/ListItems";

import styles from "./Dashboard.module.scss";

export default function Dashboard({ name }) {
  return (
    <Layout>
      <Container className={styles.dashboard}>
        <Title title={`Bienvenid@ ${name}`} />
        <ListItems />
      </Container>
    </Layout>
  );
}
