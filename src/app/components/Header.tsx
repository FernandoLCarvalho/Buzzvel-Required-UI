import React from 'react';
import styles from '../styles/header.module.css';
import { FiArrowRight } from 'react-icons/fi'; 
import Image from 'next/image';

export default function Header() {
    return (
            <header className={styles.headerContainer}>
                <div className="grid" style={{margin: 0}}>
                    {/* Brand Name */}
                    <div className={`col-12 lg:col-1 ${styles.brandName}`} style={{padding: 0}}>
                        <span>soller</span>
                    </div>

                    {/* Navigation Menu - Hidden on Mobile */}
                    <nav className={`col-7 ${styles.navMenu}`} style={{padding: 0}}>
                        <ul className={styles.navList}>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Configure</a></li>
                        </ul>
                    </nav>

                    {/* Phone Number and Request Quote Button - Hidden on Mobile */}
                    <div className={`col-4 ${styles.phoneButtonContainer}`} style={{padding: 0}}>
                        <Image src='/Vector 1.png' alt='Vector' width="24" height="24" />
                        <span className={styles.phoneNumber}>555 818 282</span>
                        <button className={styles.quoteButton}>
                            Request a Quote
                            <FiArrowRight className={styles.rightArrowIcon} />
                        </button>
                    </div>
                </div>
            </header>
    );
}
