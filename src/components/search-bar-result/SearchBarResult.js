import styles from './SearchBarResult.module.css';
import { useNavigate } from 'react-router-dom';

function SearchBarResult(props) {
    let accessColor, searchColor, insertionColor, deletionColor;

    switch(props.access) {
        case 'N/A':
            accessColor = '#bdc3c7';
            break;
        case 'O(1)':
            accessColor = '#009432';
            break;
        case 'O(n)':
            accessColor = '#e74c3c';
            break;
        case 'O(log(n))':
            accessColor = '#badc58';
            break;
    }

    switch(props.search) {
        case 'O(1)':
            searchColor = '#009432';
            break;
        case 'O(n)':
            searchColor = '#e74c3c';
            break;
        case 'O(log(n))':
            searchColor = '#badc58';
            break;
    }

    switch(props.insertion) {
        case 'O(1)':
            insertionColor = '#009432';
            break;
        case 'O(n)':
            insertionColor = '#e74c3c';
            break;
        case 'O(log(n))':
            insertionColor = '#badc58';
            break;
    }

    switch(props.deletion) {
        case 'O(1)':
            deletionColor = '#009432';
            break;
        case 'O(n)':
            deletionColor = '#e74c3c';
            break;
        case 'O(log(n))':
            deletionColor = '#badc58';
            break;
    }

    const navigateTo = useNavigate();

    const resultOnClickHandler = () => {
        let structName = props.title;
        if (structName == 'Binary Search Tree') {
            navigateTo(`/datastructures/binarysearchtree`);
        }
        else {
            navigateTo(`/datastructures/${props.title.toLowerCase().replace(' ', '').replace('-', '')}`);
        }
        props.clearInput();
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.result} onClick={resultOnClickHandler}>
            <div className={styles.mainInfo}>
                <i className="fa-solid fa-database"></i>
                <h4 className={styles.structureName}>{props.title}</h4>
            </div>
            <div className={styles.subInfo}>
                <i className="fa-solid fa-circle-info"></i>
                <div className={styles.subInfoDetails}>
                    <h6 style={{color: accessColor}}>Access: {props.access}</h6>
                    <h6 style={{color: searchColor}}>Search: {props.search}</h6>
                    <h6 style={{color: insertionColor}}>Insertion: {props.insertion}</h6>
                    <h6 style={{color: deletionColor}}>Deletion: {props.deletion}</h6>
                </div>
            </div>
        </div>
    );
}

export default SearchBarResult;