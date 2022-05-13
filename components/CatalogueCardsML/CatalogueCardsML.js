import CardML from "../CardML";
import Subtitle from "../Subtitle";

import styles from "./CatalogueCardsML.module.scss";

export default function CatalogueCardsML({ articles }) {
  console.log("articles", articles);
  return (
    <section className={styles.catalogueLayout}>
      <div>
        <Subtitle subtitle="Artículos patrocinados" />
      </div>
      <div className={styles.catalogueCards}>
        {articles.map((article) => {
          const { _id, name, description, price, images, user, link } = article;
          const photo = images[0];
          const location = user ? `${user.state}, ${user.city}` : "";

          return (
            <CardML
              id={_id}
              key={_id}
              src={photo}
              title={name}
              price={price}
              content={description}
              userLocation={location}
              link={link}
            />
          );
        })}
      </div>
    </section>
  );
}
