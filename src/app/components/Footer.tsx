import styles from "../styles/footer.module.css"
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}> 
        {/* I like to use PrimeFlex and grid system to control responsiveness grid wise */}

            <div className={`grid`} style={{ margin: 0 }}>

            {/* Always when it's using grid, the Prime Flex grid itself has a margin applied.
                That's the reason I normally cutoff the margin when I use this class. */}

                <div className={`col-12 lg:col-6 ${styles.companyDiv}`}>

                    <div className={`grid`} style={{ margin: 0 }}>

                        <div className={`col-12 lg:col-2 ${styles.companyLogo}`}>
                            <Image src="/Soller Logo.svg" alt='Soller Logo' className={styles.logo} loading="lazy" width="56" height="33"/>
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