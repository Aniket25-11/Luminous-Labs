import React from 'react';
import styles from './Navbar.module.scss';
import bg from '../images/Navbar-bg-image.png';

function Navbar() {
    return (
        <div className={styles['custom-container']} > {/* This is your specific div */}
            <div className={styles['bg-main']} style={{ backgroundImage: `url(${bg})` }} >
                <section className={styles['bg-container']} >
                    <h3>Luminous Labs</h3>
                    <div className={styles['NavTabs']}>
                        <p>Technology</p>
                        <p>Company</p>
                        <p>Commercial</p>
                        <p>Blog</p>
                        <div className={styles['shop']}>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className={styles['cartIcon']}>
                        <h4>EN <span><i className="ri-arrow-down-s-line"></i></span></h4>
                        <h4>Cart <span className={styles['bagline']}><i className="ri-shopping-bag-line"></i></span></h4>
                    </div>
                </section>
                <section2>
                    <p className={styles['para']}>Red Light Therapy: Proven, safe, and non-invasive</p>
                    <h1 className={styles['head']}>Your cells, supercharged</h1>
                </section2>
            </div>
        </div>
    );
}

export default Navbar;
