import CardPrimary from "../CardPrimary";

import styles from "./CatalogueCards.module.scss";

export default function CatalogueCards({ articles }) {
  console.log("articles", articles);
  return (
    <section className={styles.catalogueLayout}>
      {articles.map((article) => {
        const { _id, name, description, price, images, user, link } = article;
        const photo = images[0];
        const location = user ? `${user.state}, ${user.city}` : "";

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
