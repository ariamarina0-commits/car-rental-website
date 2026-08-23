import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            Contact us
          </span>

          <h1>
            We’re here to help you plan your rental.
          </h1>

          <p>
            Have a question about your booking, vehicle or
            pick-up? Get in touch with Action Rent a Car.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.icon}>
                <Phone size={22} aria-hidden="true" />
              </div>

              <div>
                <span>Phone</span>
                <strong>Client phone pending</strong>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>
                <Mail size={22} aria-hidden="true" />
              </div>

              <div>
                <span>Email</span>
                <strong>Client email pending</strong>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>
                <MapPin size={22} aria-hidden="true" />
              </div>

              <div>
                <span>Location</span>
                <strong>Heraklion, Crete</strong>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>
                <Clock3 size={22} aria-hidden="true" />
              </div>

              <div>
                <span>Opening hours</span>
                <strong>Client hours pending</strong>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.formHeader}>
              <span>Send a message</span>
              <h2>How can we help?</h2>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+30 ..."
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;