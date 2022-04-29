import styles from './CardShortcut.module.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CardShortcutAlgo(props) {
    const navigateTo = useNavigate();
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

    const shortcutOnClickHandler = () => {
        navigateTo(`/algorithms/${props.title.toLowerCase().replace(' ', '')}`);
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
                    <div className={styles.descriptionHeaderPosition} style={{width: '47.5%'}}>
                        <span>Time Complex.</span>
                        <div style={{backgroundColor: `${timeColor}`}}>{props.time}</div>
                    </div>
                    <div className={styles.descriptionHeaderPosition} style={{width: '47.5%'}}>
                        <span>Space Complex.</span>
                        <div style={{backgroundColor: `${spaceColor}`}}>{props.space}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardShortcutAlgo;