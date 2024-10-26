import styles from '../styles/sectionPowerful.module.css';
import MobileApp2 from './sectionPowerful-components/mobileApp';

export default function SectionPowerful() {
    return (
        <section className={styles.sectionPowerful}>
            <div className={`grid ${styles.sectionPowerfulContainer}`} >
                <div className={`col-12 md:col-12 lg:col-9 ${styles.servicesArticle}`} style={{ display: 'flex', padding: '5%' }}>
                    <article data-type="personalized-services">
                        <div className={`grid ${styles.servicesSections}`} style={{ padding: '0', margin: 0 }}>
                            <h3 className={`col-12 ${styles.servicesCaption}`} style={{ margin: 0, padding: 0 }}>System features</h3>
                            <h2 className={`col-12 ${styles.servicesMainHeadline}`} style={{ margin: 0, padding: 0 }}>Powerful features</h2>
                            <p className={`col-12 ${styles.servicesSecondaryHeadline}`} style={{ margin: 0, padding: 0 }}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                        </div>
                        <div className={`grid ${styles.servicesSections}`} style={{ padding: '0' }}>
                            {/* Conteúdo dividido em seções */}
                            <section id="et-mauris" className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0', margin: 0 }}>
                                <h3>Erat sit</h3>
                                <p>Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.</p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0', margin: 0 }}>
                                <h3>Ullamcorper arcu</h3>
                                <p>Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.</p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0', margin: 0 }}>
                                <h3>Et pellentesque</h3>
                                <p>Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.</p>
                            </section>
                            <section className={`col-6 ${styles.servicesSectionsRow}`} style={{ padding: '0', margin: 0 }}>
                                <h3>Amet egestas</h3>
                                <p>Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.</p>
                            </section>
                        </div>
                    </article>
                </div>

                <div className={`col-12 md:col-12 lg:col-3`} style={{ padding: '0' }}>
                    <div className={styles.gridContainer}>
                        <img
                            src="Yellow Ellipse.svg"
                            alt="Yellow Ellipse"
                            className={'backgroundImg'}
                        />
                        <div className={styles.mobileAppWrapper}>
                            <MobileApp2 />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}