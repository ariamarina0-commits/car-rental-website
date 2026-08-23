import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            Caring Rent Car
          </Link>

          <p>
            Reliable car rental in Crete with transparent service,
            flexible pick-up options and local support.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Explore</h3>

          <nav aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h3>Rental information</h3>

          <nav aria-label="Rental information">
            <Link to="/terms">Rental policy</Link>
            <Link to="/terms#premium-insurance">Insurance</Link>
            <Link to="/terms#cancellation-policy">
              Cancellation policy
            </Link>
            <Link to="/terms#fuel-policy">
              Fuel policy
            </Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>

          <div className={styles.contactList}>
            <div>
              <Phone size={18} aria-hidden="true" />
              <span>Client phone pending</span>
            </div>

            <div>
              <Mail size={18} aria-hidden="true" />
              <span>Client email pending</span>
            </div>

            <div>
              <MapPin size={18} aria-hidden="true" />
              <span>Heraklion, Crete</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {new Date().getFullYear()} Caring Rent Car.
            All rights reserved.
          </p>

          <div className={styles.legal}>
            <Link to="/terms">
              Terms
            </Link>

            <Link to="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;