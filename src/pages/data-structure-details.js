import styles from './data-structure-details.module.css';
import ComplexityInfoTableDSA from '../components/complexity-info-table/complexity-info-table-dsa';
import ProsCons from '../components/pros-cons/ProsCons';
import ExamplesAndMethods from '../components/examples-and-methods/ExampleAndMethods';
import TableContent from '../components/table-content-bar/TableContent';
import { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

function DataStructureDetails(props) {
    const image = useRef(null);
    const description = useRef(null);
    const table = useRef(null);
    const plusesMinuses = useRef(null);
    const usage = useRef(null);
    const examples = useRef(null);
    const methods = useRef(null);
    const hints = useRef(null);

    const refs = [
        image,
        table,
        description,
        hints,
        plusesMinuses,
        usage,
        examples,
        methods
    ];
    
    return (
        <div className={styles.wholePage} style={{paddingTop: '75px'}}>
            <TableContent pageElements={refs}/>
            <div className={styles.content}>
                <h1 className={styles.dataStructureName}>{props.dataStructureData.name}</h1>
                <img 
                    ref={image}
                    className={styles.dataStructureIMG} 
                    src={require(`./pages-images/${props.dataStructureData.mainImgPath}`)} 
                />
                <ComplexityInfoTableDSA
                    tableRef={table}
                    time={props.dataStructureData.timeComplexities} 
                    memory={props.dataStructureData.spaceComplexity} 
                />
                <div className={styles.explanation} ref={description}>
                    <h2 className={styles.descriptionHeader}>{props.dataStructureData.descriptionTitle}</h2>
                    <p className={styles.description}>{props.dataStructureData.description}</p>
                </div>
                <div className={styles.hints} ref={hints}>
                    <Row>
                        {props.dataStructureData.sectionImg.map(hintImg => {
                            return <Col xs={12} md={6} className={styles.hintColumn}>
                                <div className={styles.hintImg}>
                                    <img src={require(`./hint-images/${hintImg.path}`)}/>
                                    <h6>{hintImg.description}</h6>
                                </div>
                            </Col>
                        })}
                    </Row>
                </div>
                <ProsCons prosConsList={props.dataStructureData.prosCons} ProsConsRef={plusesMinuses}/>
                <ExamplesAndMethods 
                    usageRef={usage}
                    examplesRef={examples}
                    methodsRef={methods}
                    usages={props.dataStructureData.usage}
                    usagesImg={props.dataStructureData.sectionImg}
                    realLifeExamples={props.dataStructureData.examples}
                    structureMethods={props.dataStructureData.methods}
                />
            </div>
        </div>
    );
}

export default DataStructureDetails;