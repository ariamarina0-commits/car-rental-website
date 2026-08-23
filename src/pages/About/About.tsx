import {
  CarFront,
  HeartHandshake,
  MapPin,
} from "lucide-react";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            About us
          </span>

          <h1>
            Your journey around Crete starts with the right car.
          </h1>

          <p>
            At Action Rent a Car, we focus on making car rental
            simple, reliable and stress-free, so you can spend
            less time worrying about the details and more time
            enjoying Crete.
          </p>
        </header>

        <div className={styles.values}>
          <article className={styles.card}>
            <div className={styles.icon}>
              <CarFront size={26} aria-hidden="true" />
            </div>

            <h2>Simple car rental</h2>

            <p>
              Clear rental options and a straightforward experience
              from booking to vehicle return.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>
              <HeartHandshake size={26} aria-hidden="true" />
            </div>

            <h2>Personal service</h2>

            <p>
              Friendly support when you need it, helping make your
              rental experience as easy as possible.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>
              <MapPin size={26} aria-hidden="true" />
            </div>

            <h2>Made for exploring Crete</h2>

            <p>
              Pick up your car and discover the island freely,
              from its cities and beaches to the places in between.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;