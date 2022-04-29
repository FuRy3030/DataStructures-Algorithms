import styles from './SearchBarResult.module.css';
import { useNavigate } from 'react-router-dom';

function SearchBarResultAlgo(props) {
    let timeColor, spaceColor;

    switch (props.time) {
        case 'O(1)':
            timeColor = '#009432';
            break;
        case 'O(n^2)':
            timeColor = '#e74c3c';
            break;
        case 'O(n)':
            timeColor = '#f1c40f';
            break;
        case 'O(log(n))':
            timeColor = '#badc58';
            break;
        case 'O(n*log(n))':
            timeColor = '#F79F1F';
            break;
    }

    switch (props.space) {
        case 'O(1)':
            spaceColor = '#009432';
            break;
        case 'O(n^2)':
            spaceColor = '#e74c3c';
            break;
        case 'O(n)':
            spaceColor = '#f1c40f';
            break;
        case 'O(log(n))':
            spaceColor = '#badc58';
            break;
        case 'O(n*log(n))':
            spaceColor = '#F79F1F';
            break;
    }

    const navigateTo = useNavigate();

    const resultOnClickHandler = () => {
        navigateTo(`/algorithms/${props.title.toLowerCase().replace(' ', '')}`);
        props.clearInput();
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.result} onClick={resultOnClickHandler}>
            <div className={styles.mainInfo}>
                <i className="fa-solid fa-gears"></i>
                <h4 className={styles.structureName}>{props.title}</h4>
            </div>
            <div className={styles.subInfo}>
                <i className="fa-solid fa-circle-info"></i>
                <div className={styles.subInfoDetails}>
                    <h6 style={{color: timeColor}}>Time: {props.time}</h6>
                    <h6 style={{color: spaceColor}}>Space: {props.space}</h6>
                </div>
            </div>
        </div>
    );
}

export default SearchBarResultAlgo;