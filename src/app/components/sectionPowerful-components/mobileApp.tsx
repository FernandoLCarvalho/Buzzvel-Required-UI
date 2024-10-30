import styles from '../../styles/mobileApp2.module.css';
import Image from 'next/image';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>
            <div className={styles.mobileAppBorderArround}>
                <div className={`grid ${styles.mobileAppContent}`}>
                    {/* Top Image Section */}
                    <div className='col-12' style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <Image src='/Image 1 Mobile App 2.png' alt="Top Section Image" width={343.2} height={235.2}/>
                    </div>

                    {/* Middle Content Section */}
                    <div className='col-12' style={{ marginBottom: '20%' }}>
                        <Image src='/Image 2 Mobile App 2.png' alt="Middle Content" width={343.2} height={115.2}/>
                    </div>
                    <div className='col-12' style={{ width: '60%' }}>
                        <Image src='/Image 3 Mobile App 2.png' alt="Bottom Content" width={180} height={19.2}/>
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
                        <Image src='/pulse-outline.svg' alt="Pulse" className={styles.bottomMenuIcon} width="31" height="31"/>
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='/search-outline.svg' alt="Search" className={styles.bottomMenuIcon} width="31" height="31"/>
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='/menu-outline.svg' alt="Menu" className={styles.bottomMenuIcon} width="31" height="31"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
