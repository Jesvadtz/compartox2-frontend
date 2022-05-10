import { Grid } from "@mui/material";
import Image from "next/image";

import Title from "../Title";
import Subtitle from "../Subtitle";
import ButtonPrimary from "../ButtonPrimary";

import styles from "./LandingSectionBg.module.scss";

export default function LandingSectionBg({
  title,
  subtitle,
  children,
  src,
  bgWhite,
  href,
}) {
  return (
    <Grid
      container
      className={`${styles.landingSectionBg} ${bgWhite ? styles.bgWhite : ""}`}
    >
      <Grid item xs={12} md={6} className={styles.landingTextBg}>
        <Title title={title} />
        <Subtitle subtitle={subtitle}></Subtitle>
        <ButtonPrimary variant="contained" href={href}>
          {children}
        </ButtonPrimary>
      </Grid>
      <Grid item xs={8} md={4} className={styles.landingSecImage}>
        <Image
          src={src}
          width="400px"
          height="250px"
          alt="compartox2-landing"
          className={styles.landingImageBg}
        />
      </Grid>
    </Grid>
  );
}
