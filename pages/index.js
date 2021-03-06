import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LandingSection from "../components/LandingSection";
import LandingSectionBg from "../components/LandingSectionBg";
import CatalogueCards from "../components/CatalogueCards";

import getArticles from "../services/articles/getArticles";
import Title from "../components/Title";

import styles from "../styles/Landing.module.scss";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const dataArticles = await getArticles();
      setArticles(dataArticles.data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <Layout>
      <LandingSection
        title="¿Eres estudiante y necesitas materiales a bajo costo?"
        subtitle="Descubre nuestra app para obtener los mejores artículos a un costo accesible para tu educación."
        src="/illustrations/ilu-01.svg"
      >
        Ver artículos
      </LandingSection>
      <LandingSectionBg
        title="¿Quieres vender materiales que ya no usas y obtener un ingreso extra?"
        subtitle="Conoce los beneficios de utilizar nuestra aplicación para vender esos materiales o libros que ya no utilizas."
        src="/illustrations/ilu-02.svg"
        href="/signup"
      >
        Me interesa
      </LandingSectionBg>
      <LandingSectionBg
        title="Si prefieres productos nuevos, tenemos los mejores"
        subtitle="Tenemos materiales al alcance de tus manos para que no tengas que salir de casa."
        src="/illustrations/ilu-03.svg"
        bgWhite
        href="/"
      >
        Buscar artículos
      </LandingSectionBg>
      <section className={styles.homeTitle}>
        <div className={styles.homeTitleLanding}>
          <Title title="Lo más reciente" />
        </div>
        <CatalogueCards articles={articles} className={styles.homeCatalogue} />
      </section>
    </Layout>
  );
}
