import React from 'react';
import styles from '../styles/sectionHero.module.css';
import 'primeflex/primeflex.css';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function SectionHero() {
    return (
        <main> {/* This section looks like the main content to me */ }
            <section className={styles.heroSection}>
                <div className="grid" style={{margin: '0'}}>
                    <div className={`col-12 sm:col-6 ${styles.heroTextContainer}`}>
                        <h1 className={styles.heroTitle}>Get the Sun to Power Your Home</h1>
                        <p className={styles.heroSubtitle}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                        <div className={`${styles.quoteButtonContainer} ${styles.mobileCenter}`}>
                            <button className={styles.quoteButton}>
                                Request a Quote <FiArrowRight className={styles.arrowIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={`col-12 ${styles.heroQuoteContainer}`}>
                        <p className={styles.heroQuote}>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
                        <div className={styles.heroRwanda}>
                            <Image src='/Rwanda Melflor.svg' alt='Rwanda Melflor' className={styles.heroImage} width="64" height="64" />
                            <div className={styles.heroRwandaText}>
                                <span className={styles.heroRwandaName}>Rwanda Melflor</span>
                                <a href='https://zerowaste.com' className={styles.heroRwandaLink}>zerowaste.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
