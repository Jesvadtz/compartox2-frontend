import Layout from "../Layout";
import CardPrimary from "../CardPrimary";

import styles from "./CatalogueCards.module.scss";

export default function CatalogueCards() {
  return (
    <Layout>
      <section className={styles.catalogueLayout}>
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
        <CardPrimary
          src="/catalogue/catalogue-02.jpg"
          title="Caja de colores Prismacolor"
          price="1'000"
          content="Pigmentos altamente saturados y resistentes a la luz. 150 lápices de colores de primera"
          userLocation="Ciudad de México, CDMX "
        />
      </section>
    </Layout>
  );
}
