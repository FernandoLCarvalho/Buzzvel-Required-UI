import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={`grid`} style={{ margin: 0 }}>
                <div className={`col-12 mg:col-12 lg:col-6 ${styles.companyDiv}`}>
                    <div className={`grid`} style={{ margin: 0 }}>
                        <div className={`col-12 lg:col-2 ${styles.companyLogo}`}>
                            <img src="Soller Logo.svg" className={styles.logo} />
                            <span className={styles.artVenue}>Soller</span>
                        </div>
                        <div className={`col-12 lg:col-10 ${styles.companyInfo}`}>
                            <span>@ 2023 Soller, Inc. All rights reserved.</span>
                        </div>
                    </div>
                </div>
                <div className={`col-12 lg:col-6 ${styles.links}`}>
                    <a href="#" className={styles.individualLink}>Terms</a>
                    <a href="#" className={styles.individualLink}>Privacy</a>
                    <a href="#" className={styles.individualLink}>Support</a>
                </div>
            </div>
        </footer>
    );
}