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
                <div className={`${styles.backgroundContainer}`}>
                    <div className={`${styles.ellipseWrapper}`}>
                        <Image src='/Ellipse 14.svg' alt='Ellipse background left' className={styles.ellipseBackgroundLeft} width="710" height="711"/>
                        <Image src='/Ellipse 15.svg' alt='Ellipse background right' className={styles.ellipseBackgroundRight} width="558" height="597"/>
                    </div>
                    <div className={`${styles.desktopImage}`} />
                </div>
            </div>
        </section>
    );
}
