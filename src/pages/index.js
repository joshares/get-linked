import Layout from "component/Layout";
import Faq from "component/components/Faq";
import Footer from "component/components/Footer";
import Hero from "component/components/Hero";
import Intro from "component/components/Intro";
import Partners from "component/components/Partners";
import Privacy from "component/components/Privacy";
import Prize from "component/components/Prize";
import Timeline from "component/components/Timeline";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Faq />
      <Timeline />
      <Prize />
      <Partners />
      <Privacy />
      <Footer />
    </Layout>
  );
}
