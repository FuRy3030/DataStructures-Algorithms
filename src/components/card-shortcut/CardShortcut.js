import styles from './CardShortcut.module.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CardShortcut(props) {
    const navigateTo = useNavigate();
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
            accessColor = '#f1c40f';
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
            searchColor = '#f1c40f';
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
            insertionColor = '#f1c40f';
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
            deletionColor = '#f1c40f';
            break;
    }

    const shortcutOnClickHandler = () => {
        let structName = props.title;
        if (structName == 'B-Search Tree') {
            navigateTo(`/datastructures/binarysearchtree`);
        }
        else {
            navigateTo(`/datastructures/${props.title.toLowerCase().replace(' ', '').replace('-', '')}`);
        }
        window.scrollTo(0, 0);
    };

    return (
        <Card style={{ width: '100%', padding: '10px'}} className={styles.card} 
            onClick={shortcutOnClickHandler}>
            <Card.Img 
                className={styles.img} 
                variant="top" 
                src={require(`./images-shortcuts/${props.targetPath}`)} 
            />
            <Card.Body className={styles.body}>
                <Card.Title className={styles.title}>{props.title}</Card.Title>
                <div className={styles.descriptionHeader}>
                    <div className={styles.descriptionHeaderPosition}>
                        <span>Access</span>
                        <div style={{backgroundColor: `${accessColor}`}}>{props.access}</div>
                    </div>
                    <div className={styles.descriptionHeaderPosition}>
                        <span>Search</span>
                        <div style={{backgroundColor: `${searchColor}`}}>{props.search}</div>
                    </div>
                    <div className={styles.descriptionHeaderPosition}>
                        <span>Insertion</span>
                        <div style={{backgroundColor: `${insertionColor}`}}>{props.insertion}</div>
                    </div>
                    <div className={styles.descriptionHeaderPosition}>
                        <span>Deletion</span>
                        <div style={{backgroundColor: `${deletionColor}`}}>{props.deletion}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardShortcut;