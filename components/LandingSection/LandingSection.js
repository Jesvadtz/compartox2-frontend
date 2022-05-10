import { Grid } from "@mui/material";

import Title from "../Title";
import Subtitle from "../Subtitle";
import ButtonPrimary from "../ButtonPrimary";

import styles from "./LandingSection.module.scss";

export default function LandingSection({ title, subtitle, children, src }) {
  return (
    <Grid container spacing={2} className={styles.landingSection}>
      <Grid item xs={6} md={6} lg={6} className={styles.landingText}>
        <Title title={title} />
        <Subtitle subtitle={subtitle}></Subtitle>
        <div>
          {" "}
          <ButtonPrimary variant="contained" href="/catalogue">
            {children}
          </ButtonPrimary>
        </div>
      </Grid>
      <Grid item xs={6} md={6} lg={4} className={styles.landingContainerImg}>
        <img src={src} className={styles.landingImage} />
      </Grid>
    </Grid>
  );
}
