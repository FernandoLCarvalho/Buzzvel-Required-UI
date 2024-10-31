import React from 'react';
import styles from '../styles/sectionPickSun.module.css';
import Image from 'next/image';

export default function SectionPickSun() {
    return (
        <section className={styles.pickSunSection} aria-labelledby="pick-sun-title">
            <div className={styles.sectionContent}>
                <article className={styles.textContent}>
                    <span id="pick-sun-title" className={styles.sectionCaption}>No more waste</span>
                    <h1 className={styles.sectionTitle}>Pick the Sun</h1>
                    <p className={styles.sectionParagraph}>
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                    </p>
                </article>
                <div className={`grid ${styles.backgroundContainer}`}>
                    <div className={`lg:col-12 ${styles.desktopImage}`} />
                    <div className={styles.teste}>
                        <Image src='/Ellipse 14.svg' alt='Ellipse background left' className={styles.ellipseBackgroundLeft} width="710" height="711" />
                        <div className={styles.ellipseBackgroundRight} />
                    </div>
                </div>
            </div>
        </section>
    );
}
