import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
import searchArticles from "../services/articles/searchArticles";

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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
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

// eslint-disable-next-line
const LogoImage = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        src="/compartox2.svg"
        width="100px"
        height="30px"
        alt="compartox2-logo"
      />
    </a>
  );
});

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    console.log("userLocalStorage", userLocalStorage);
    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      setUser(userData?.user);
    }
  }, []);

  const router = useRouter();

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("search", search);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleSubmit = async () => {
    router.push(`/catalogue?q=${search}`);
  };

  return (
    <Box xs={12}>
      <AppBar position="static" color="white">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <MenuMobile user={user} />
            <Link href="/" passHref>
              <LogoImage />
            </Link>
            <Search>
              <SearchIconWrapper onClick={handleSubmit}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar artículos..."
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={search}
                name="search"
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {user ? (
                <Link href="/" passHref>
                  <ButtonText
                    variant="text"
                    color="gray"
                    onClick={handleSignOut}
                  >
                    Cerrar Sesión
                  </ButtonText>
                </Link>
              ) : (
                <Link href="/signup" passHref>
                  <ButtonText variant="text" color="gray">
                    Crear cuenta
                  </ButtonText>
                </Link>
              )}
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
                  width="40px"
                  height="40px"
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
