import styles from '../../styles/mobileApp.module.css';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>
            <div className={styles.mobileAppBorderArround}>
                <div className={`grid ${styles.mobileAppContent}`}>
                    <div className='col-9' style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <img src='Mobile App Left Arrow.png' alt="Seta" />
                        <div className={`${styles.title}`} />
                    </div>

                    <div className='col-10'>
                        <img src='Mobile App Description.svg' alt="Descrição" />
                    </div>
                    <div className={`${styles.featureCardsContainer}`}>
                        <div className={styles.featureCard}>
                            <img src='Ellipse 3.svg' alt="Ellipse 3" className={`${styles.ellipse} ${styles.ellipse3}`} />
                            <img src='Ellipse 5 (Stroke).svg' alt="Ellipse 5" className={`${styles.ellipse} ${styles.ellipse5}`} />
                        </div>

                        <div className={styles.featureCard}>
                            {/* Here it was just easier to draw the circles and use position on them */}
                            <div className={styles.largeCircle}></div>
                            <div className={styles.smallCircle}></div>
                        </div>

                        <div className={`${styles.featureCard} ${styles.lastFeatureCard}`}>
                            <img src='Star 1 (Stroke).svg' alt="Star 1" className={`${styles.star}`} />
                            <img src='Ellipse 5 (Stroke).svg' alt="Circle" className={`${styles.ellipse} ${styles.ellipseForStar}`} />
                        </div>
                    </div>

                    <div className='col-6' style={{ display: 'flex', justifyContent: 'start', marginLeft: '0', padding: '0' }}>
                        <div className={`${styles.bar}`} />
                    </div>

                    <div className={`${styles.lastFeatureContainer}`}>
                        <div className={styles.largeCircleInLastFeature}></div>
                        <div className={styles.smallCircleInLastFeature}></div>
                        <div className={styles.triangle}></div>
                    </div>

                </div>
                <div className={`grid ${styles.bottomMenu}`} style={{margin:'0'}}>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='/pulse-outline.svg' alt="Pulse" className={styles.bottomMenuIcon} />
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='/search-outline.svg' alt="Search" className={styles.bottomMenuIcon} />
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='/menu-outline.svg' alt="Menu" className={styles.bottomMenuIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
}
