import { Grid } from "@mui/material";

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
}) {
  return (
    <Grid
      container
      className={`${styles.landingSectionBg} ${bgWhite ? styles.bgWhite : ""}`}
    >
      <Grid item xs={12} md={6} className={styles.landingTextBg}>
        <Title title={title} />
        <Subtitle subtitle={subtitle}></Subtitle>
        <ButtonPrimary variant="contained">{children}</ButtonPrimary>
      </Grid>
      <Grid item xs={8} md={4} className={styles.landingSecImage}>
        <img src={src} className={styles.landingImageBg} />
      </Grid>
    </Grid>
  );
}
