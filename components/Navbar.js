import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

import ButtonText from "./ButtonText";
import MenuMobile from "../components/MenuMobile";
import Image from "next/image";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    const userData = JSON.parse(userLocalStorage);
    setUser(userData?.user);
  }, []);

  return (
    <Box xs={12}>
      <AppBar position="static" color="white">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <MenuMobile />
            <Link href="/" passHref>
              <Image
                src="/compartox2.svg"
                width="86px"
                height="21px"
                alt="compartox2-logo"
              />
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar artículos..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link href={user ? `/` : `/signup`} passHref>
                <ButtonText
                  variant="text"
                  color="gray"
                  onClick={() => localStorage.removeItem("user")}
                >
                  {user ? `Cerrar Sesión` : `Crear cuenta`}
                </ButtonText>
              </Link>
              <Link href={user ? `/dashboard` : `/login`} passHref>
                <ButtonText variant="text">
                  {user ? `Mi perfil` : `Iniciar Sesión`}
                </ButtonText>
              </Link>
            </Box>
            <Box sx={{ display: { md: "flex" } }}>
              <IconButton size="large" edge="end" color="inherit">
                <Image
                  src="/avatar.svg"
                  width="56px"
                  height="56px"
                  alt="compartox2-avatar"
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
