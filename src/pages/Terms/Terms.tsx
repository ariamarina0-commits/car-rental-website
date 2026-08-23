import styles from "./Terms.module.css";

function Terms() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Rental policy</span>

          <h1>Clear rental terms for a smooth journey.</h1>

          <p>
            Please read the following terms carefully before confirming your
            reservation with Action Rent a Car.
          </p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav aria-label="Rental policy sections">
              <a href="#driver-requirements">Driver requirements</a>
              <a href="#reservations-payment">Reservations & payment</a>
              <a href="#vehicle-collection">Vehicle collection</a>
              <a href="#vehicle-return">Vehicle return</a>
              <a href="#fuel-policy">Fuel policy</a>
              <a href="#cancellation-policy">Cancellation policy</a>
              <a href="#premium-insurance">Premium insurance</a>
              <a href="#roadside-assistance">Roadside assistance</a>
              <a href="#accident-procedure">Accident procedure</a>
              <a href="#theft-protection">Theft protection</a>
              <a href="#traffic-fines">Traffic fines</a>
              <a href="#ferry-off-road">Ferry & off-road use</a>
              <a href="#additional-drivers">Additional drivers</a>
              <a href="#child-seats">Child seats</a>
            </nav>
          </aside>

          <div className={styles.content}>
            <article id="driver-requirements" className={styles.sectionCard}>
              <h2>Driver Requirements</h2>

              <ul>
                <li>Drivers must be between 21 and 79 years of age.</li>
                <li>
                  A valid driving licence must have been held for at least one
                  year.
                </li>
                <li>
                  Drivers must present a valid driving licence together with a
                  passport or national identity card at vehicle collection.
                </li>
                <li>
                  An International Driving Permit may be required for licences
                  issued outside the European Union where applicable.
                </li>
              </ul>

              <p>
                Action Rent a Car reserves the right to refuse vehicle rental
                if the required documents are not presented.
              </p>
            </article>

            <article id="reservations-payment" className={styles.sectionCard}>
              <h2>Reservations & Payment</h2>

              <p>
                Reservations can be made through the website, by telephone or
                by email.
              </p>

              <h3>Accepted payment methods</h3>

              <ul>
                <li>Credit cards</li>
                <li>Debit cards</li>
                <li>Cash, where applicable</li>
              </ul>

              <p>All reservations are subject to vehicle availability.</p>

              <p>
                Action Rent a Car reserves the right to provide a vehicle of
                the same or a higher category at no additional cost if the
                reserved vehicle is unavailable.
              </p>
            </article>

            <article id="vehicle-collection" className={styles.sectionCard}>
              <h2>Vehicle Collection</h2>

              <p>
                Your rental vehicle will be delivered clean, fully inspected
                and in excellent mechanical condition.
              </p>

              <p>
                Before departure, customers are encouraged to inspect the
                vehicle together with one of our representatives.
              </p>

              <p>
                Any existing damage will be recorded before the rental begins.
              </p>
            </article>

            <article id="vehicle-return" className={styles.sectionCard}>
              <h2>Vehicle Return</h2>

              <p>The vehicle must be returned:</p>

              <ul>
                <li>On the agreed date and time.</li>
                <li>In the same condition as received.</li>
                <li>With the same fuel level as at collection.</li>
              </ul>

              <p>
                If the vehicle is returned significantly later than agreed
                without prior notice, additional rental charges may apply.
              </p>
            </article>

            <article id="fuel-policy" className={styles.sectionCard}>
              <h2>Fuel Policy</h2>

              <p className={styles.highlight}>Same to Same</p>

              <p>
                The vehicle must be returned with the same fuel level as it had
                when collected.
              </p>

              <p>
                If the fuel level is lower upon return, the customer will be
                charged for the missing fuel together with any applicable
                service costs.
              </p>
            </article>

            <article id="cancellation-policy" className={styles.sectionCard}>
              <h2>Cancellation Policy</h2>

              <p>We understand that travel plans may change.</p>

              <p className={styles.highlight}>
                Free cancellation up to 48 hours before the scheduled pickup
                time.
              </p>

              <p>
                Cancellations made less than 48 hours before pickup or failure
                to collect the vehicle without prior notice may result in
                cancellation charges.
              </p>
            </article>

            <article id="premium-insurance" className={styles.sectionCard}>
              <h2>Premium Insurance</h2>

              <p>
                Action Rent a Car aims to provide transparent pricing with no
                hidden costs.
              </p>

              <h3>Premium Insurance includes</h3>

              <ul>
                <li>Vehicle body damage protection</li>
                <li>Windscreen and glass protection</li>
                <li>Tyre protection</li>
                <li>Theft protection</li>
              </ul>

              <h3>Premium Insurance does not cover</h3>

              <ul>
                <li>Damage caused by dangerous or negligent driving.</li>
                <li>Driving under the influence of alcohol or drugs.</li>
                <li>Damage caused by using the vehicle off-road.</li>
                <li>Loss or damage of vehicle keys.</li>
                <li>Damage caused by using the wrong fuel.</li>
                <li>
                  Damage resulting from violation of Greek traffic laws.
                </li>
              </ul>
            </article>

            <article id="roadside-assistance" className={styles.sectionCard}>
              <h2>Roadside Assistance</h2>

              <p>
                24-hour roadside assistance is available throughout Crete.
              </p>

              <p>
                If your vehicle develops a mechanical problem, please contact
                Action Rent a Car immediately.
              </p>

              <p>
                Customers must not arrange repairs without prior approval from
                Action Rent a Car.
              </p>
            </article>

            <article id="accident-procedure" className={styles.sectionCard}>
              <h2>Accident Procedure</h2>

              <ol>
                <li>Ensure everyone’s safety.</li>
                <li>Contact the Police if required.</li>
                <li>Contact Action Rent a Car immediately.</li>
                <li>
                  Do not admit liability or sign any document without approval.
                </li>
                <li>Follow the instructions provided by our representative.</li>
              </ol>

              <p>
                Failure to report an accident immediately may affect insurance
                coverage.
              </p>
            </article>

            <article id="theft-protection" className={styles.sectionCard}>
              <h2>Theft Protection</h2>

              <p>
                All vehicles include Theft Protection under the Premium
                Insurance policy.
              </p>

              <p>
                Any theft or attempted theft must be reported immediately to
                both the Police and Action Rent a Car.
              </p>
            </article>

            <article id="traffic-fines" className={styles.sectionCard}>
              <h2>Traffic Fines</h2>

              <p>The renter is fully responsible for:</p>

              <ul>
                <li>Traffic fines</li>
                <li>Parking penalties</li>
                <li>Speed camera violations</li>
                <li>Any legal charges arising during the rental period</li>
              </ul>
            </article>

            <article id="ferry-off-road" className={styles.sectionCard}>
              <h2>Ferry & Off-Road Use</h2>

              <p>
                Vehicles are not permitted to leave the island of Crete by
                ferry unless prior written approval has been obtained from
                Action Rent a Car.
              </p>

              <p>
                Driving on beaches, rough terrain or unpaved roads is strictly
                prohibited.
              </p>

              <p>
                Any damage caused by off-road driving is not covered by
                insurance.
              </p>
            </article>

            <article id="additional-drivers" className={styles.sectionCard}>
              <h2>Additional Drivers</h2>

              <p>
                Additional drivers may be added to the rental agreement upon
                request.
              </p>

              <p>
                All additional drivers must meet the same licence and age
                requirements as the main driver.
              </p>
            </article>

            <article id="child-seats" className={styles.sectionCard}>
              <h2>Child Seats</h2>

              <p>
                Child seats and booster seats are available upon request.
              </p>

              <p>
                Please request them during your reservation to help ensure
                availability.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;