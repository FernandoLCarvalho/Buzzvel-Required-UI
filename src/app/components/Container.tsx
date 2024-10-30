import { FiArrowRight } from 'react-icons/fi';
import styles from '../styles/container.module.css';
import Image from 'next/image';

export default function Container() {
    return (
        <section className={styles.sectionContainer}>
            <Image src='/Last Ellipse.svg' alt='Section Ellipse' className={styles.backgroundImgContainer} loading='lazy' width="782" height="438"/>
            <article className={`grid ${styles.contentContainer}`}>
                <div className={`col-12 lg:col-8 ${styles.mainContent}`}>
                    <h3 className={styles.caption}>Get the Sun to power your home</h3>
                    <h1 className={styles.mainHealine}>All the power that you need for your house is now available</h1>
                </div>
                <div className={`col-12 lg:col-4 ${styles.buttonContent}`}>
                    <button className={styles.quoteButton}>
                        Request a Quote <FiArrowRight/>
                    </button>

                    <p className={styles.phrase}>Egestas fringilla aliquam leo</p>
                </div>
            </article>

            <div className={styles.macbookContainer}>
                    <Image src='/Top Macbook.svg' alt='Top Macbook' className={styles.topMacbook} loading='lazy' width="816" height="540"/>
                    <Image src='/Bottom Macbook.svg' alt='Bottom Macbook' className={styles.bottomMacbook} loading='lazy' width="1008" height="18"/>
                </div>
        </section>
    );
}
