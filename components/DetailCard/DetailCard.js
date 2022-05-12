import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/material/styles";
import { Container, Divider } from "@mui/material";

import ButtonPrimary from "../ButtonPrimary";
import Image from "next/image";

import styles from "../CardPrimary/CardPrimary.module.scss";
import stylesDetail from "./DetailCard.module.scss";
import ModalContact from "../ModalContact";

const CardStyled = styled(CardMedia)(({ theme }) => ({
  width: 324,
  [theme.breakpoints.up("md")]: {
    width: "100%",
    display: "flex",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function DetailCard({ article }) {
  const { price, name, description, createdAt, author, editorial, images } =
    article;
  const user = article?.user;
  const userLocation = `${user?.state}, ${user?.city}`;
  const userName = `${user?.name} ${user?.lastname}`;
  const userPhone = user?.number;
  const userEmail = user?.email;
  const publishedDate = new Date(createdAt).toLocaleDateString();

  const photo = images[0];
  console.log("article", article);

  const isBook = article.type === "Libro";

  console.log("article", article);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container className={stylesDetail.detailContainer}>
        <CardStyled>
          <CardMedia className={stylesDetail.detailCardImage}>
            <Image
              src={photo}
              width="400px"
              height="500px"
              alt="image-article"
            />
          </CardMedia>
          <CardContent
            className={`${styles.cardContainer} ${stylesDetail.detailDataCard}`}
          >
            <div className={stylesDetail.detailInfo}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={styles.cardPrice}
              >
                $ {price} MXN
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon color="secondary" />
                  {/* <FavoriteOutlinedIcon color="secondary" /> */}
                </IconButton>
              </Typography>
              <div>
                <div>
                  <Typography variant="h6" className={stylesDetail.detailTitle}>
                    {name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className={stylesDetail.detailContent}
                  >
                    {description}
                  </Typography>
                </div>
                {isBook && (
                  <div className={stylesDetail.detailBook}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={stylesDetail.detailContent}
                    >
                      Autor: {author}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={stylesDetail.detailContent}
                    >
                      Editorial: {editorial}
                    </Typography>
                  </div>
                )}
                <ButtonPrimary variant="contained" onClick={handleOpen}>
                  Lo quiero
                </ButtonPrimary>
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={stylesDetail.detailDataContainer}>
              <div>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Vendido por
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {userName}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Ubicación del vendedor
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {userLocation}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Publicado el
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {publishedDate}
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardStyled>
      </Container>
      <ModalContact
        open={open}
        onClose={handleClose}
        name={name}
        userName={userName}
        userPhone={userPhone}
        userEmail={userEmail}
      />
    </>
  );
}
