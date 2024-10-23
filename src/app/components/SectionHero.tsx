import React from 'react';
import styles from '../styles/sectionHero.module.css';
import 'primeflex/primeflex.css';
import { FiArrowRight } from 'react-icons/fi';

export default function SectionHero() {
    return (
        <main> {/* This section looks like the main content to me */ }
            <section className={styles.heroSection}>
                <div className="grid" style={{margin: '0'}}>
                    <div className={`col-12 sm:col-6 ${styles.heroTextContainer}`}>
                        <h1 className={styles.heroTitle}>Get the Sun to Power Your Home</h1>
                        <p className={styles.heroSubtitle}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                        <button className={styles.quoteButton}>
                            Request a Quote <FiArrowRight className={styles.arrowIcon} />
                        </button>
                    </div>
                    <div className={`col-12 ${styles.heroImageContainer}`}>
                        <img src='/man-working-on-solar.jpg' alt='Man working on solar panels' className={styles.heroImage} />
                    </div>
                </div>
            </section>
        </main>
    );
}
