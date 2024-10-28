import React from 'react';
import 'primeflex/primeflex.css';
import styles from '../styles/header.module.css';
import Head from 'next/head';
import { FiArrowRight } from 'react-icons/fi'; 

export default function Header() {
    return (
            <header className={styles.headerContainer}>
                <div className="grid p-nogutter">
                    {/* Brand Name */}
                    <div className={`col-1 ${styles.brandName}`}>
                        <h1>soller</h1>
                    </div>

                    {/* Navigation Menu - Hidden on Mobile */}
                    <nav className={`col-7 ${styles.navMenu}`}>
                        <ul className={styles.navList}>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Configure</a></li>
                        </ul>
                    </nav>

                    {/* Phone Number and Request Quote Button - Hidden on Mobile */}
                    <div className={`col-4 ${styles.phoneButtonContainer}`}>
                        <img src='Vector 1.png'></img>
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
