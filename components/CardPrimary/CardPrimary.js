import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

import styles from "./CardPrimary.module.scss";
import Image from "next/image";

const CardStyled = styled(CardMedia)(({ theme }) => ({
  width: 154,
  [theme.breakpoints.up("md")]: {
    width: 252,
  },
}));

export default function CardPrimary({
  src,
  price,
  title,
  content,
  userLocation,
}) {
  return (
    <CardStyled>
      {/* <CardActionArea> */}
      <CardMedia className={styles.cardImage}>
        <Image src={src} width="500px" height="500px" layout="responsive" />
      </CardMedia>
      <CardContent className={styles.cardContainer}>
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
          <Typography variant="h6" className={styles.cardTitle}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.cardContent}
          >
            {content}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            className={styles.cardLocation}
          >
            {userLocation}
          </Typography>
        </div>
      </CardContent>
      {/* </CardActionArea> */}
    </CardStyled>
  );
}
