"use client";

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import styles from '../styles/sectionTestimonials.module.css';
import Cards from './sectionTestimonials-components/cards';
import { useState, useEffect } from 'react';

export default function SectionTestimonials() {
    const cardsData = [
        {
            paragraph: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
            img: '/User Thumb 1.svg',
            pot: 10,
            name: 'Jane Cooper',
        },
        {
            paragraph: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
            img: '/User Thumb 2.svg',
            pot: 32,
            name: 'Ralph Edwards',
        },
        {
            paragraph: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
            img: '/User Thumb 3.svg',
            pot: 6,
            name: 'Courtney Henry',
        },
        {
            paragraph: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
            img: '/User Thumb 4.svg',
            pot: 12,
            name: 'Cameron Williamson',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const cardsLength = cardsData.length * 2; 
    const nextCard = () => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= cardsLength) {
            return 0; // Volta para o início após o final do array concatenado
        }
        return prevIndex + 1;
    });
};

const prevCard = () => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex - 1 < 0) {
            return cardsLength - 1;
        }
        return prevIndex - 1;
    });
};

    useEffect(() => {
        if (currentIndex >= cardsLength) {
            setCurrentIndex(0);
        } else if (currentIndex < 0) {
            setCurrentIndex(cardsLength - 1);
        }
    }, [currentIndex, cardsLength]);

    return (
        <section className={styles.sectionTestimonialsContainer}>
            <div className={`grid ${styles.topSection}`}>
                <article
                    data-type="Join other Sun harvesters"
                    className={`col-12 lg:col-6 ${styles.textArticle}`}
                >
                    <h3 className={styles.caption}>Join other Sun harvesters</h3>
                    <h1 className={styles.mainHeadline}>Make something awesome</h1>
                    <p className={styles.paragraph}>
                    Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                    </p>
                </article>
                <div className={`col-12 lg:col-6 ${styles.quoteButtonContainer}`}>
                    <button className={styles.quoteButton}>
                        Request a Quote <FiArrowRight className={styles.arrowIcon} />
                    </button>
                </div>

                <div className={`col-12 ${styles.sliderContainer}`}>
                    <section className={styles.testimonialCardsSection}>
                        <div
                            className={`${styles.cardsWrapper} ${styles.transitionEffect}`}
                            style={{ transform: `translateX(-${currentIndex * 384}px)` }}
                        >
                            {cardsData.concat(cardsData).map((card, index) => (
                                <Cards
                                    key={index}
                                    paragraph={card.paragraph}
                                    img={card.img}
                                    pot={card.pot}
                                    name={card.name}
                                    index={index}
                                    selectedIndex={currentIndex}
                                />
                            ))}
                        </div>

                        <div className={styles.cardsButtons}>
                            <button className={styles.arrowButton} onClick={prevCard}>
                                <FiArrowLeft />
                            </button>
                            <button className={styles.arrowButton} onClick={nextCard}>
                                <FiArrowRight />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
