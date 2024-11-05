"use client";

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import styles from '../styles/sectionTestimonials.module.css';
import Cards from './sectionTestimonials-components/cards';
import { useState, useEffect, useRef } from 'react';

export default function SectionTestimonials() {
    // Data for each card, including text, image, and other details.
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
        // Duplicate of the last card to create the effect of continuity in the carousel
        {
            paragraph: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
            img: '/User Thumb 4.svg',
            pot: 12,
            name: 'Cameron Williamson',
        },
    ];

    // State to track the current index of the displayed card
    const [currentIndex, setCurrentIndex] = useState(0);
    // State to store the width of each card (including any gap)
    const [cardWidth, setCardWidth] = useState(0);
    // Ref to measure the width of a card element for dynamic responsiveness
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to update the card width including the gap
        const updateCardWidth = () => {
            if (cardRef.current) {
                const width = cardRef.current.offsetWidth;
                const gap = 20;
                setCardWidth(width + gap);
            }
        };

        // First is needed to verify if it's in the client side
        if (typeof window !== 'undefined') {
            // Redize Observer is a function that allows to observe the width of the cards keeping it responsive
            const observer = new ResizeObserver(() => updateCardWidth());
            if (cardRef.current) observer.observe(cardRef.current);

            // initial width
            updateCardWidth();

            // Clean the observer everytime the component is dismounted
            return () => {
                if (cardRef.current) observer.unobserve(cardRef.current);
            };
        }
    }, []); 

    // Function to move to the next card in the carousel
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length); // Loop back to start after last card
    };

    // Function to move to the previous card in the carousel
    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1 // Loop back to end if at first card
        );
    };

    return (
        <section className={styles.sectionTestimonialsContainer}>
            <div className={`grid ${styles.topSection}`} style={{ margin: 0 }}>
                {/* Header and description text section */}
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

                {/* Carousel container */}
                <div className={`col-12 ${styles.sliderContainer}`} style={{ padding: 0 }}>
                    <section className={styles.testimonialCardsSection}>
                        <div
                            className={`${styles.cardsWrapper}`}
                            style={{
                                transform: `translateX(-${currentIndex * cardWidth}px)`, // Move cards based on current index
                                transition: 'transform 0.8s ease-in-out', // Smooth transition for movement
                            }}
                        >
                            {cardsData.map((card, index) => (
                                <div key={index} ref={index === 0 ? cardRef : null} className={styles.cardContainer}>
                                    <Cards
                                        paragraph={card.paragraph}
                                        img={card.img}
                                        pot={card.pot}
                                        name={card.name}
                                        index={index}
                                        selectedIndex={currentIndex}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation buttons for carousel */}
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
