import FeatureCard from "../../common/FeatureCard";
import { features } from "../../../data/features";
import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>Why choose us</span>

          <h2>Everything you need for an easy rental experience.</h2>

          <p>
            Simple booking, reliable vehicles and local support from the
            moment you arrive.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;