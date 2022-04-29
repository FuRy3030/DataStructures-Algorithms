import styles from './ProsCons.module.css';
import { Row, Col } from 'react-bootstrap';

function ProsCons(props) {
    return (
        <Row 
            style={{width: '100%', paddingLeft: '5%', paddingRight: '5%'}} 
            className={styles.ProsCons}
            ref={props.ProsConsRef}
        >
            <Col xs={12} md={6} style={{padding: '20px'}}>
                <h2 className={styles.header} style={{
                    color: '#10ac84', 
                    textShadow: '0px 0px 5px #10ac84'
                }}>
                    <i className="fa-solid fa-arrow-trend-up"></i> Pros
                </h2>
                <ul className={styles.pros}>
                    {props.prosConsList.pros.map(singlePros => {
                        return <li className={`${styles.listElement} ${styles.pros}`}>{singlePros}</li>
                    })}
                </ul>
            </Col>
            <Col xs={12} md={6} style={{padding: '20px'}}>
                <h2 className={styles.header} style={{
                    color: '#FF3131',
                    textShadow: '0px 0px 5px #FF3131'
                }}>
                    <i className="fa-solid fa-arrow-trend-down"></i> Cons
                </h2>
                <ul className={styles.cons}>
                    {props.prosConsList.cons.map(singleCons => {
                        return <li className={`${styles.listElement} ${styles.con}`}>{singleCons}</li>
                    })}
                </ul>
            </Col>
        </Row>
    );
}

export default ProsCons;