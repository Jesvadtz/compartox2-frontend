import * as React from "react";
import Link from "next/link";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
  link,
}) {
  const cardLink = link ? link : `/article/${id}`;

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
          variant="h6"
          component="div"
          className={styles.cardPrice}
        >
          $ {price} MXN
        </Typography>
        <div>
          <Typography
            variant="body1"
            className={styles.cardTitle}
            sx={{ fontWeight: "bold" }}
          >
            {link ? (
              <a href={cardLink} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              <Link href={cardLink}>{title}</Link>
            )}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
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
