import styles from '../styles/sectionServices.module.css';
import MobileApp from './sectionServices-components/mobileApp';
import Image from 'next/image';

export default function SectionServices() {
    return (
        <section style={{ padding: '2% 0' }}>
            <div className={`grid ${styles.servicesContainer}`} style={{ margin: '0' }}>
                <div className={`col-12 lg:col-4 ${styles.firstDiv}`} style={{ padding: 0 }}>
                    <div className={styles.gridContainer}>
                        <Image
                            src="/Rectangle 15.svg"
                            alt="Rectangle"
                            className={styles.backgroundImg}
                            loading='lazy'
                            width="1146" height="1000"
                        />
                        <div className={styles.mobileAppWrapper}>
                            <MobileApp />
                        </div>
                    </div>
                </div>

                <article data-type="personalized-services" className={`col-12 lg:col-8 ${styles.articleContainer}`}>
                    <div className={`${styles.articleInside}`}>
                        <div className={`grid`} style={{ margin: 0, width: '100%' }}>
                            <span className={`col-12 ${styles.servicesCaption}`} >Services</span>
                            <h2 className={`col-12 ${styles.servicesMainHeadline}`}>Personalized Services</h2>
                            <p className={`col-12 ${styles.servicesSecondaryHeadline}`} >Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                        </div>
                        <div className={`grid ${styles.servicesSections}`} style={{ padding: '0'}}>
                            <section id="et-mauris" className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0' }}>
                                <h3>Et mauris</h3>
                                <p>Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.</p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0' }}>
                                <h3>Eget sit</h3>
                                <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0' }}>
                                <h3>Imperdiet pellentesque</h3>
                                <p>Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.</p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0' }}>
                                <h3>Non libero</h3>
                                <p>Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.</p>
                            </section>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
}
