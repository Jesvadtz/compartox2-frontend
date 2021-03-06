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

export default function MenuMobile({ user }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setExpanded(open);
  };

  const list = () => (
    <Box
      sx={{ width: 300, paddingTop: "2rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Title title={user ? `Hola, ${user?.name} !` : ``} />
        </ListItem>
        <Link href={user ? `/dashboard` : `/login`} passHref>
          <ListItem button>
            <ListItemText primary={user ? `Mi perfil` : `Iniciar Sesión`} />
          </ListItem>
        </Link>
        {!user && (
          <Link passHref href={"/signup"}>
            <ListItem button>
              <ListItemText secondary={"Crear cuenta"} />
            </ListItem>
          </Link>
        )}
      </List>
      <Divider />
      <List>
        <Link href="/catalogue" passHref>
          <ListItem button>
            <ListItemText primary={"Catálogo de artículos"} />
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
