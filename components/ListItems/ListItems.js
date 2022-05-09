import { List, Divider } from "@mui/material";

import ItemDashboard from "../ItemDashboard";
import Note from "../Note";
import ButtonPrimary from "../ButtonPrimary";

import styles from "./ListItems.module.scss";

export default function ListItems() {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 1200,
        }}
        className={styles.listContainer}
      >
        <div>
          <div className={styles.listItem}>
            <ItemDashboard text="Artículos en venta" count="10" />
            <Note note="Ver artículos" href="/" />
          </div>
          <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
          <div className={styles.listItem}>
            <ItemDashboard text="Artículos en borrador" count="10" />
            <Note note="Ver artículos" href="/" />
          </div>
          <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
        </div>
        <div>
          <div className={styles.listItem}>
            <ItemDashboard text="Usuarios interesados" count="10" />
            <Note note="Ver usuarios" href="/" />
          </div>
          <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
          <div className={styles.listItem}>
            <ItemDashboard text="Favoritos" count="10" />
            <Note note="Ver favoritos" href="/" />
          </div>
          <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
        </div>
      </List>
      <ButtonPrimary children="Vender artículo" variant="contained" />
    </>
  );
}
