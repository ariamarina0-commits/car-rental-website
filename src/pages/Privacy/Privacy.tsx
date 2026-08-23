import styles from './Privacy.module.css';

function Privacy() {
    return(
        <section className={styles.page}>
            <div className="container">
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Privacy</span>
                    <h1>Privacy Policy</h1>
                    <p>
                        This privacy policy will be added before launch once the booking,
                         contact and payment systems are fully implemented. The privacy policy 
                         will outline how we collect, use, and protect your personal information
                          when you use our website and services. It will also provide information
                           on your rights regarding your personal data and how to contact us with 
                           any questions or concerns.
                    </p>
                </header>
                <div className={styles.card}>
                    <h2>Policy pending</h2>
                    <p>This page is currently a development placeholder.
                        The final policy will be describe how personal data is collected
                        processed and protected by Caring Rent Car.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Privacy;