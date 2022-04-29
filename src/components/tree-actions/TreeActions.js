import styles from './TreeActions.module.css';
import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';

function TreeActions(props) {
    return (
        <div ref={props.operationsRef}>
            <h2 className={styles.header}>Tree Operations</h2>
            <Row className={styles.treeActions}>
                <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.action}>
                    <div className={styles.innerFragment}>
                        <img 
                            src={require(`./actions-images/${props.actions[0].img}`)} 
                            className={styles.actionImg}
                        />
                        <h3 className={styles.actionDescription}>{props.actions[0].text}</h3>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.action}>
                    <div className={styles.innerFragment}>
                        <img 
                            src={require(`./actions-images/${props.actions[1].img}`)} 
                            className={styles.actionImg}
                        />
                        <h3 className={styles.actionDescription}>{props.actions[1].text}</h3>
                    </div>
                </Col>
                {props.cases && 
                    <div className={styles.fullDiv}>
                        <h3>Insertion - Rotating the tree when current node isn't balanced</h3>
                        <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.actionCases}>
                            <h5>Balance Factor &gt; 1</h5>
                            <h6>New Node Value &lt; Left Child Value - Right Rotation</h6>
                            <h6>New Node Value &gt; Left Child Value - Left-Right Rotation</h6>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.actionCases}>
                            <h5>Balance Factor &lt; -1</h5>
                            <h6>New Node Value &gt; Left Child Value - Left Rotation</h6>
                            <h6>New Node Value &lt; Left Child Value - Right-Left Rotation</h6>
                        </Col>
                    </div>
                }
                <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.action}>
                    <div className={styles.innerFragment}>
                        <img 
                            src={require(`./actions-images/${props.actions[2].img}`)} 
                            className={styles.actionImg}
                        />
                        <h3 className={styles.actionDescription}>{props.actions[2].text}</h3>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.action}>
                    <div className={styles.innerFragment}>
                        <img 
                            src={require(`./actions-images/${props.actions[3].img}`)} 
                            className={styles.actionImg}
                        />
                        <h3 className={styles.actionDescription}>{props.actions[3].text}</h3>
                    </div>
                </Col>
                {props.cases && 
                    <div className={styles.fullDiv}>
                        <h3>Deletion - Rotating the tree when current node isn't balanced</h3>
                        <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.actionCases}>
                            <h5>Balance Factor &gt; 1</h5>
                            <h6>Balance Factor of Left Child &gt;= 0 - Right Rotation</h6>
                            <h6>Balance Factor of Left Child &lt; 0 - Left-Right Rotation</h6>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: '35px'}} className={styles.actionCases}>
                            <h5>Balance Factor &lt; -1</h5>
                            <h6>Balance Factor of Right Child &lt;= 0 - Left Rotation</h6>
                            <h6>Balance Factor of Right Child &gt; 0 - Right-Left Rotation</h6>
                        </Col>
                    </div>
                }
            </Row>
            <hr className={styles.divider} />
        </div>
    );
}

export default TreeActions;