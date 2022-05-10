import * as React from "react";
import Link from "next/link";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
  id,
}) {
  return (
    <CardStyled>
      <CardMedia className={styles.cardImage}>
        <Image
          src={src}
          width="350px"
          height="400px"
          layout="responsive"
          alt="image-article"
          priority="true"
        />
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
            <Link href={`/article/${id}`}>{title}</Link>
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
    </CardStyled>
  );
}
