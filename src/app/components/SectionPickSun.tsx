import React from 'react';
import styles from '../styles/sectionPickSun.module.css';

export default function SectionPickSun() {
    return (
        <section className={styles.pickSunSection} aria-labelledby="pick-sun-title">
            <div className={styles.sectionContent}>
                <article>
                    <h2 id="pick-sun-title" className={styles.sectionCaption}>No more waste</h2>
                    <h1 className={styles.sectionTitle}>Pick the Sun</h1>
                    <p className={styles.sectionParagraph}>
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                    </p>
                </article>
                <div className={`${styles.backgroundContainer}`}>
                    <img src='/Ellipse 14.svg' alt='Ellipse background left' className={styles.ellipseBackgroundLeft} />
                    <img src='/Ellipse 15.svg' alt='Ellipse background right' className={styles.ellipseBackgroundRight} />
                    <div className={`${styles.desktopImage}`} />
                </div>

            </div>
        </section >
    );
}