import Layout from "component/Layout";
import Faq from "component/components/Faq";
import Hero from "component/components/Hero";
import Intro from "component/components/Intro";
import Timeline from "component/components/Timeline";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Faq />
      <Timeline />
    </Layout>
  );
}
