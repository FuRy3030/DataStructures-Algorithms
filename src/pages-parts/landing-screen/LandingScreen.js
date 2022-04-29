import styles from './LandingScreen.module.css';
import React, { useEffect, useRef } from 'react';

function LandingScreen(props) {

    const LandingPhotoRef = useRef(null);

    const updateHeaderStyle = (entries) => {
        const [ entry ] = entries;
        props.onChangeHeaderClass(entry.isIntersecting);
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(updateHeaderStyle, options);
        observer.observe(LandingPhotoRef.current);

        return () => {
            if (LandingPhotoRef.current) {
                observer.unobserve(LandingPhotoRef.current);
            }
        }
    }, []);

    return (
        <div className={styles.landingScreenContent} ref={LandingPhotoRef}>
            <span>Decide Which<br /> Data Structure & Algorithm<br /> To Pick</span>
        </div>
    );
}

export default LandingScreen;