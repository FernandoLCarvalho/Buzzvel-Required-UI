import React from 'react';
import 'primeflex/primeflex.css';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Responsive header for Soller with navigation menu and contact details." />
                <meta name="keywords" content="Header, Navigation, Soller, Next, React, PrimeFlex" />
                <meta name="author" content="Soller Team" />
                <title>Soller - Header</title>
            </head>
            
            <header className={styles.headerContainer}>
                <div className="p-grid p-nogutter">
                    {/* Brand Name */}
                    <div className={`p-col ${styles.brandName}`}>
                        <h1>soller</h1>
                    </div>

                    {/* Navigation Menu - Hidden on Mobile */}
                    <nav className={`p-col ${styles.navMenu}`}>
                        <ul className={styles.navList}>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Configure</a></li>
                        </ul>
                    </nav>

                    {/* Phone Number and Request Quote Button - Hidden on Mobile */}
                    <div className={`p-col ${styles.phoneButtonContainer}`}>
                        <span className={styles.phoneNumber}>555 818 282</span>
                        <button className={styles.quoteButton}>Request a Quote</button>
                    </div>
                </div>
            </header>
        </>
    );
}
