import React from 'react'
import styles from './Section2.module.scss';

function Section2() {
  return (
    <>
        <div className={styles['main-div']}>
            <div>
                <p className={styles['main-bold-line']}>In 2050, material wealth will not be</p>
                <p className={styles['main-gray-line']}>impressive. YourVo2Max, <span>SPAN</span>speed of aging,<br /> HRV <span>SPAN</span> and body far percentage <span>SPAN</span>will be. </p>
            </div>

            <div>
                <div>
                    <p className={styles['main-app-line']}>Applications</p>
                    <h4 className={styles['main-shape-line']}>Start Shaping your Tomorrow</h4>
                </div>
                <div className={styles['threeProfiles']}>
                    <div>
                        <img className={styles['section2-img']} src="https://plus.unsplash.com/premium_photo-1741902729271-0fedc9f167df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHN0YW5kaW5nJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <p className={styles['main-app-line']}>Stay your best self, always</p>
                        <ul className={styles['main-btn-type']}>
                            <p>Wellbeing</p>
                        </ul>
                    </div>
                    <div>
                        <img className={styles['section2-img']} src="https://plus.unsplash.com/premium_photo-1741902729271-0fedc9f167df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHN0YW5kaW5nJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <p className={styles['main-app-line']}>Stay your best self, always</p>
                        <ul className={styles['main-btn-type']}>
                            <p>Wellbeing</p>
                        </ul>
                    </div>
                    <div>
                        <img className={styles['section2-img']} src="https://plus.unsplash.com/premium_photo-1741902729271-0fedc9f167df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHN0YW5kaW5nJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <p className={styles['main-app-line']}>Stay your best self, always</p>
                        <ul className={styles['main-btn-type']}>
                            <p>Wellbeing</p>
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default Section2