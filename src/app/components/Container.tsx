import { FiArrowRight } from 'react-icons/fi';
import styles from '../styles/container.module.css';

export default function Container() {
    return (
        <section className={styles.sectionContainer}>
            <img src='Last Ellipse.png' className={styles.backgroundImgContainer} />
            <article className={`grid ${styles.contentContainer}`}>
                <div className={`col-12 lg:col-8 ${styles.mainContent}`}>
                    <h3 className={styles.caption}>Get the Sun to power your home</h3>
                    <h1 className={styles.mainHealine}>All the power that you need for your house is now available</h1>
                </div>
                <div className={`col-12 lg:col-4 ${styles.buttonContent}`}>
                    <button className={styles.quoteButton}>
                        Request a Quote <FiArrowRight />
                    </button>

                    <p className={styles.phrase}>Egestas fringilla aliquam leo</p>
                </div>
            </article>

            <div className={styles.macbookContainer}>
                    <img src='Top Macbook.svg' className={styles.topMacbook}/>
                    <img src='Bottom Macbook.svg' className={styles.bottomMacbook}/>
                </div>
        </section>
    );
}
