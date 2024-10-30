import Image from 'next/image';
import styles from '../../styles/cards.module.css';

type CardsProps = {
    paragraph: string;
    img: string;
    pot: number;
    name: string;
    index: number;
    selectedIndex: number;
};

export default function Cards({ paragraph, img, pot, name, index, selectedIndex }: CardsProps) {
   
    const cardClassName = index === selectedIndex ? styles.selected : styles.card;

    return (
        <div className={styles.cardContainer}>
            <div className={cardClassName}>
                <p className={styles.paragraph}>{paragraph}</p>
                <div className={styles.userInfo}>
                    <Image src={img} alt="User Thumbnail" width={64} height={64} className={styles.userThumb} loading='lazy'/>
                    <div className={styles.userDetails}>
                        <span className={styles.userName}>{name}</span>
                        <span className={styles.userPot}>{pot} KWh</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
