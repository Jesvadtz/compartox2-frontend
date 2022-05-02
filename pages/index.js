import Layout from "../components/Layout";
import LandingSection from "../components/LandingSection";
import LandingSectionBg from "../components/LandingSectionBg";

export default function Home() {
  return (
    <Layout>
      <LandingSection
        title="¿Eres estudiante y necesitas materiales a bajo costo?"
        subtitle="Descubre nuestra app para obtener los mejores artículos a un costo accesible para tu educación."
        children="Ver artículos"
        src="./illustrations/ilu-01.svg"
      />
      <LandingSectionBg
        title="¿Quieres vender materiales que ya no usas y obtener un ingreso extra?"
        subtitle="Conoce los beneficios de utilizar nuestra aplicación para vender esos materiales o libros que ya no utilizas."
        children="Me interesa"
        src="./illustrations/ilu-02.svg"
      />
      <LandingSectionBg
        title="Si prefieres productos nuevos, tenemos los mejores"
        subtitle="Tenemos materiales al alcance de tus manos para que no tengas que salir de casa."
        children="Ver artículos"
        src="./illustrations/ilu-03.svg"
        bgWhite
      />
    </Layout>
  );
}
