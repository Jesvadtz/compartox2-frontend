import CardPrimary from "../CardPrimary";

import styles from "./CatalogueCards.module.scss";

export default function CatalogueCards({ articles }) {
  return (
    <section className={styles.catalogueLayout}>
      {articles.map((article) => {
        const { _id, name, description, price, images, user } = article;
        const photo = images[0];
        const location = `${user.state}, ${user.city}`;
        return (
          <CardPrimary
            id={_id}
            key={_id}
            src={photo}
            title={name}
            price={price}
            content={description}
            userLocation={location}
          />
        );
      })}
    </section>
  );
}
