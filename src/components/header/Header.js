import styles from './Header.module.css';
import SearchBar from '../search-bar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigateTo = useNavigate();
    const [isSubHeaderVisible, setSubHeaderVisibilty] = useState(false);
    const subHeaderToggle = () => {
        if (isSubHeaderVisible == false) {
            setSubHeaderVisibilty(true);
            props.updateSubHeaderClass(true);
        }
        else {
            setSubHeaderVisibilty(false);
            props.updateSubHeaderClass(false);
        }
    };

    const ComparisonRedirect = () => {
        navigateTo(`/comparison`);
    };

    const DataStructuresRedirect = () => {
        navigateTo(`/home`);
        setTimeout(() => {
            window.location.href = "#";
            window.location.href = "#DataStructures";
        }, 100);
    };

    const AlgorithmsRedirect = () => {
        navigateTo(`/home`);
        setTimeout(() => {
            window.location.href = "#";
            window.location.href = "#Algorithms";
        }, 100);
    };

    const HomeRedirect = () => {
        navigateTo(`/home`);
    };
    
    return (
        <div className={`
            ${styles.header} 
            ${props.isLandingScreenActive && styles.activeLandingScreen}
            ${isSubHeaderVisible ? styles.activeSubHeader : ''}`
        }>
            <h2 onClick={HomeRedirect} style={{cursor: 'pointer'}}>Codex</h2>
            <h3 onClick={HomeRedirect}><i className="bi bi-code-slash"></i> All</h3>
            <h3 onClick={DataStructuresRedirect}>
                <i className="bi bi-stack"></i> Data Structures
            </h3>
            <h3 className={styles.optionRight} onClick={AlgorithmsRedirect}>
                <i className="bi bi-gear-wide-connected"></i> Algorithms
            </h3>
            <SearchBar 
                searchBarClass={'header'} 
                searchBarClassExtended={props.isLandingScreenActive && 'activeLandingScreen'}
            />
            <i 
                className={
                    `bi bi-list 
                    ${styles.expandIcon} 
                    ${props.isLandingScreenActive && styles.activeLandingScreen}`
                }
                onClick={subHeaderToggle}>
            </i>
            <h3 onClick={ComparisonRedirect}>
                <i className="fa-solid fa-scale-balanced"></i> Compare
            </h3>
        </div>
    );
}

export default Header;