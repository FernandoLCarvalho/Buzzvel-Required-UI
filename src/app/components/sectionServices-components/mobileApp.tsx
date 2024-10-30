import styles from '../../styles/mobileApp.module.css';
import Image from 'next/image';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>
            <div className={styles.mobileAppBorderArround}>
                <div className={`grid ${styles.mobileAppContent}`}>
                    <div className='col-9' style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <Image src='/Mobile App Left Arrow.png' alt="Left Arrow" width={51.6} height={57.6}/>
                        <div className={`${styles.title}`} />
                    </div>

                    <div className='col-10'>
                        <Image src='/Mobile App Description.svg' alt="Descrição" width="270" height="49" />
                    </div>
                    <div className={`${styles.featureCardsContainer}`}>
                        <div className={styles.featureCard}>
                            <Image src='/Ellipse 3.svg' alt="Ellipse 3" className={`${styles.ellipse} ${styles.ellipse3}`} width="97" height="91"/>
                            <Image src='/Ellipse 5 (Stroke).svg' alt="Ellipse 5" className={`${styles.ellipse} ${styles.ellipse5}`} width="66" height="66" />
                        </div>

                        <div className={styles.featureCard}>
                            {/* Here it was just easier to draw the circles and use position on them */}
                            <div className={styles.largeCircle}></div>
                            <div className={styles.smallCircle}></div>
                        </div>

                        <div className={`${styles.featureCard} ${styles.lastFeatureCard}`}>
                            <Image src='/Star 1 (Stroke).svg' alt="Star 1" className={`${styles.star}`} width="92" height="88"/>
                            <Image src='/Ellipse 5 (Stroke).svg' alt="Circle" className={`${styles.ellipse} ${styles.ellipseForStar}`} width="66" height="66"/>
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
