import Head from 'next/head';
import styles from '../styles/sectionServices.module.css';
import MobileApp from './sectionServices-components/mobileApp';

export default function SectionServices() {
    return (
        <>
            <Head> {/* This part only refers to SEO scripts that refers only to this very section*/}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Personalized Services",
                      "description": "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Soller"
                      }
                    }
                    `}
                </script>
            </Head>

            <section style={{ padding: '2% 0', width: '100vw' }}>
                <div className={`grid ${styles.servicesContainer}`} style={{ margin: '0' }}>
                    <div className={`col-12 sm:col-3 ${styles.firstDiv}`} style={{ padding: 0 }}>
                        <div className={styles.gridContainer}>
                            <img
                                src="Rectangle 15.svg"
                                alt="Rectangle"
                                className={'backgroundImg'}
                            />
                            <div className={styles.mobileAppWrapper}>
                                <MobileApp />
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 sm:col-9`} style={{ display: 'flex', padding: '5%', alignItems: 'start' }}>
                        <article data-type="personalized-services">
                            <div className={`grid`} style={{ padding: '0', margin: 0 }}>
                                <h3 className={`col-12 styles.servicesCaption`} style={{ margin: 0, padding: 0 }}>Services</h3>
                                <h2 className={`col-12 styles.servicesMainHeadline`} style={{ margin: 0, padding: 0 }}>Personalized Services</h2>
                                <p className={`col-12 styles.servicesSecondaryHeadline`} style={{ margin: 0, padding: 0 }}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                            </div>
                            <div className={`grid ${styles.servicesSections}`} style={{ padding: '0'}}>
                                <section id="et-mauris" className='col-6 ' style={{ padding: '0', margin: 0 }}>
                                    <h3>Et mauris</h3>
                                </section>
                                <section className='col-6' style={{ padding: '0', margin: 0 }}>
                                    <h3>Eget sit</h3>
                                </section>
                                <section className='col-6' style={{ padding: '0', margin: 0 }}>
                                    <h3>Imperdiet pellentesque</h3>
                                </section>
                                <section className='col-6' style={{ padding: '0', margin: 0 }}>
                                    <h3>Non libero</h3>
                                </section>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
