import { Grid } from "@mui/material";
import Image from "next/image";

import Title from "../Title";
import Subtitle from "../Subtitle";
import ButtonPrimary from "../ButtonPrimary";

import styles from "./LandingSection.module.scss";

export default function LandingSection({ title, subtitle, children, src }) {
  return (
    <Grid container className={styles.landingSection}>
      <Grid item xs={6} md={6} lg={6} className={styles.landingText}>
        <Title title={title} />
        <Subtitle subtitle={subtitle}></Subtitle>
        <ButtonPrimary
          variant="contained"
          href="/catalogue"
          className={styles.landingButton}
        >
          {children}
        </ButtonPrimary>
      </Grid>
      <Grid item xs={6} md={6} lg={4} className={styles.landingContainerImg}>
        <Image
          src={src}
          width="300px"
          height="400px"
          alt="compartox2-landing"
          className={styles.landingImage}
        />
      </Grid>
    </Grid>
  );
}
