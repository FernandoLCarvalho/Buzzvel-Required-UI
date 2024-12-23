import styles from '../../styles/mobileApp.module.css';
import Image from 'next/image';

export default function MobileApp2() {
    return (
        <div className={styles.mobileAppContainer}>
            
                <div className={`grid ${styles.mobileAppContent}`} style={{margin: 0}}>
                    <div className='col-8' style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Image src='/Mobile App Left Arrow.png' alt="Left Arrow" width={57.6} height={57.6} className={styles.arr} loading='lazy'/>
                        <div className={`${styles.title}`} />
                    </div>

                    <div className={`col-9 ${styles.description}`} style={{padding: 0}}>
                        <Image src='/Mobile App Description.svg' alt="Descrição" width={268.8} height={48} loading='lazy'/>
                    </div>
                    <div className={`${styles.featureCardsContainer}`}>
                   
                        <div className={styles.featureCard}>
                            <Image src='/Ellipse 3.svg' alt="Ellipse 3" className={`${styles.ellipse} ${styles.ellipse3}`} width="97" height="91" loading='lazy'/>
                            <Image src='/Ellipse 5 (Stroke).svg' alt="Ellipse 5" className={`${styles.ellipse} ${styles.ellipse5}`} width="66" height="66" loading='lazy'/>
                        </div>

                        <div className={styles.featureCard}>
                            {/* Here it was just easier to draw the circles and use position on them */}
                            <div className={styles.largeCircle}></div>
                            <div className={styles.smallCircle}></div>
                        </div>

                        <div className={`${styles.featureCard} ${styles.lastFeatureCard}`}>
                            <Image src='/Star 1 (Stroke).svg' alt="Star 1" className={`${styles.star}`} width="92" height="88" loading='lazy'/>
                            <Image src='/Ellipse 5 (Stroke).svg' alt="Circle" className={`${styles.ellipse} ${styles.ellipseForStar}`} width="66" height="66" loading='lazy'/>
                        </div>
                    </div>

                    <div className='col-6' style={{ display: 'flex', justifyContent: 'start', padding: '0' }}>
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
                        <Image src='/pulse-outline.svg' alt="Pulse" className={styles.bottomMenuIcon} width="50" height="31" loading='lazy'/>
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='/search-outline.svg' alt="Search" className={styles.bottomMenuIcon} width="50" height="31" loading='lazy'/>
                    </div>
                    <div className='col-4' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='/menu-outline.svg' alt="Menu" className={styles.bottomMenuIcon} width="50" height="31" loading='lazy'/>
                    </div>
                </div>
        
        </div>
    );
}
