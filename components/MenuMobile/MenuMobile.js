import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import Title from "../Title";

import styles from "./MenuMobile.module.scss";

export default function MenuMobile() {
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState({});

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setExpanded(open);
  };

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    const userData = JSON.parse(userLocalStorage);
    setUser(userData?.user);
  }, []);

  const list = () => (
    <Box
      sx={{ width: 250, paddingTop: "2rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Title title={`Hola, ${user?.name} !`} />
        </ListItem>
        <Link href={user ? `/dashboard` : `/login`} passHref>
          <ListItem button>
            <ListItemText primary={user ? `Mi perfil` : `Iniciar Sesión`} />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText primary={user ? `Favoritos` : ``} />
        </ListItem>
        <Link
          passHref
          href={user ? `/` : `/signup`}
          onClick={() => localStorage.removeItem("user")}
        >
          <ListItem button>
            <ListItemText secondary={user ? `Cerrar Sesión` : `Crear cuenta`} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/catalogue" passHref>
          <ListItem button>
            <ListItemText primary={"Catálogo de artículos"} />
          </ListItem>
        </Link>
        <Link href="/" passHref>
          <ListItem button>
            <ListItemText primary={"Mercado Libre"} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div className={styles.menuMobile}>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
          },
        }}
        anchor={"left"}
        open={expanded}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
