import styles from '../../styles/mobileApp2.module.css';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>
            <div className={styles.mobileAppBorderArround}>
                <div className={`grid ${styles.mobileAppContent}`}>
                    {/* Top Image Section */}
                    <div className='col-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <img src='Image 1 Mobile App 2.png' alt="Top Section Image" />
                    </div>

                    {/* Middle Content Section */}
                    <div className='col-12' style={{ marginBottom: '20%' }}>
                        <img src='Image 2 Mobile App 2.png' alt="Middle Content" />
                    </div>
                    <div className='col-12' style={{ width: '60%' }}>
                        <img src='Image 3 Mobile App 2.png' alt="Middle Content" />
                    </div>

                    {/* Bottom Circles Section */}
                    <div className={`${styles.featureCardsContainer}`}>
                        <div className={`${styles.featureCardCircle} ${styles.firstCircle}`} style={{ backgroundColor: 'rgba(251, 191, 36, 1)', border: '2px solid white' }}></div>
                        <div className={`${styles.featureCardCircle} ${styles.secondCircle}`} style={{ backgroundColor: 'white', border: '2px solid rgba(186, 230, 253, 1)' }}></div>
                        <div className={`${styles.featureCardCircle} ${styles.thirdCircle}`} style={{ backgroundColor: 'rgba(186, 230, 253, 1)', border: '2px solid white' }}></div>
                    </div>

                </div>

                {/* Bottom Menu */}
                <div className={`grid ${styles.bottomMenu}`} style={{ margin: '0' }}>
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
