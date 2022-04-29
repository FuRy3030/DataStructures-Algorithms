import { Fragment, useState } from 'react';
import { Accordion, Carousel, Toast, ToastContainer, Row, Col } from 'react-bootstrap';
import styles from './ExampleAndMethods.module.css';

function ExamplesAndMethods(props) {
    let eventKeyCounter = 0;
    let methodsDisplayInitial = [];
    props.structureMethods.methodsList.forEach(methodText => {
        methodText.eventKeyCounter = eventKeyCounter;
        eventKeyCounter = eventKeyCounter + 1;
        methodsDisplayInitial.push(false);
    });

    const [ methodsDisplay, setMethodsDisplay ] = useState(methodsDisplayInitial);

    const ButtonClickHanlder = (currentIndex) => {
        setMethodsDisplay(prevState => {
            if (prevState[currentIndex] == false) {
                prevState[currentIndex] = true;
            }
            else {
                prevState[currentIndex] = false;
            }

            for (let i = 0; i < prevState.length; i++) {
                if (i != currentIndex) {
                    prevState[i] = false;
                }
            }
            return [...prevState];
        });
    }

    return (
        <Fragment>
            <h2 className={styles.examplesHeader}>When To Use?</h2>
            <section className={styles.wholeSection} ref={props.usageRef}>
                <div className={styles.examples}>
                    <Row>
                        {props.usages.map(usage => {
                            return <Col xs={12} lg={6}>
                                <ul className={styles.listNoPadding}>
                                    <li className={styles.exampleElement}>
                                        <i className={usage.iconClass}></i>
                                        <span>{usage.text.replace('=>', '')}</span>
                                    </li>
                                </ul>
                            </Col>
                        })}
                    </Row>
                </div>
            </section>
            <ToastContainer className={styles.examplesRealLife} ref={props.examplesRef}>
                <h1 className={styles.header}>Real Coding Examples</h1>
                <Row style={{width: '100%', marginLeft: '0px'}}>
                    {props.realLifeExamples.map(example => {
                        return <Col xs={12} md={6}>
                                <Toast className={styles.exampleRealLife}>
                                    <Toast.Header>                                        
                                        <strong className={`me-auto ${styles.exampleRealLifeHeader}`}>
                                            {example.title.toUpperCase()}
                                        </strong>
                                        <small className={`text-muted ${styles.exampleRealLifeSmall}`}>
                                            {example.typeRepresentation}
                                        </small>
                                    </Toast.Header>
                                    <Toast.Body className={styles.exampleRealLifeBody}>
                                        {example.description}
                                    </Toast.Body>
                                </Toast>
                            </Col>
                            
                    })}
                </Row>
            </ToastContainer>
            <Accordion className={styles.methods} ref={props.methodsRef}>
                <h2 className={styles.methodsHeader}>{props.structureMethods.title}</h2>
                {props.structureMethods.methodsList.map((method, index) => {
                    return <Accordion.Item 
                        className={styles.methodLayer}
                        eventKey={method.eventKeyCounter.toString()} 
                        key={index}>
                            <Accordion.Header 
                                className={`${styles.methodsButton} 
                                ${methodsDisplay[index] && styles.methodsButtonClicked}`} 
                                onClick={() => ButtonClickHanlder(index)}
                            >
                                {method.boldPart}
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li className={styles.method}>{method.rest}</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                })}
            </Accordion>
        </Fragment>
    );
}

export default ExamplesAndMethods;