import { IndexView } from "@/views/Index";
import Head from "next/head";

export const metadata= {
  "title": "Desarrollo Web -Agencia de Marketing Digital - Ecommerce - SEO - AIMET ",
  "description": "Somos una agencia de marketing digital y desarrollo web en Argentina. Ayudamos a las empresas a crecer y a aumentar sus ventas.",
}

const Index = () => {
  return (
    <>
      <IndexView />
    </>
  );
};

export async function getStaticProps({ locale }) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ["common",])),
    },
    // revalidate: 300,
  };
}

export default Index;
