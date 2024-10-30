import styles from '../../styles/mobileApp2.module.css';
import Image from 'next/image';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>

            <div className={`grid ${styles.mobileAppContent}`}>
                {/* Top Image Section */}
                <div className={`col-12 ${styles.firstImage}`} style={{ padding: 0 }}>
                    <Image src='/Image 1 Mobile App 2.svg' alt="Top Section Image" width="344" height="236" className={styles.firstImageContent}/>
                </div>

                {/* Middle Content Section */}
                <div className={`col-12 ${styles.secondImage}`} style={{ padding: 0 }}>
                    <Image src='/Image 2 Mobile App 2.png' alt="Middle Content" width="320" height="100" className={styles.secondImageContent} />
                </div>
                <div className={`col-12 ${styles.thirdImage}`} style={{ padding: 0, marginBottom: '2%' }}>
                    <Image src='/Image 3 Mobile App 2.png' alt="Bottom Content" width={180} height={19.2} className={styles.thirdImageContent}/>
                </div>

                {/* Bottom Circles Section */}
                <div className={`${styles.featureCardsContainer}`}>
                    <div className={`${styles.featureCardCircle} ${styles.firstCircle}`} style={{ backgroundColor: 'rgba(251, 191, 36, 1)' }}></div>
                    <div className={`${styles.featureCardCircle} ${styles.secondCircle}`} style={{ backgroundColor: 'white' }}></div>
                    <div className={`${styles.featureCardCircle} ${styles.thirdCircle}`} style={{ backgroundColor: 'rgba(186, 230, 253, 1)' }}></div>
                </div>

            </div>

            {/* Bottom Menu */}
            <div className={`grid ${styles.bottomMenu}`} style={{ margin: '0' }}>
                <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src='/pulse-outline.svg' alt="Pulse" className={styles.bottomMenuIcon} width="50" height="31" />
                </div>
                <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src='/search-outline.svg' alt="Search" className={styles.bottomMenuIcon} width="50" height="31" />
                </div>
                <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src='/menu-outline.svg' alt="Menu" className={styles.bottomMenuIcon} width="50" height="31" />
                </div>
            </div>

        </div>
    );
}
