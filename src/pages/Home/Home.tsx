import FeaturedFleet from "../../components/home/FeaturedFleet";
import Hero from "../../components/home/Hero";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import styles from "./Home.module.css";
import Reviews from "../../components/home/Reviews/Reviews";
import PickupLocations from "../../components/home/PickupLocations";
import FAQ from "../../components/home/FAQ/FAQ";
import FinalCTA from "../../components/home/FinalCTA/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedFleet />
      <Reviews />
      <PickupLocations />
      <FAQ />
      <FinalCTA />

      <section className={styles.content}>
      </section>
    </>
  );
}

export default Home;
