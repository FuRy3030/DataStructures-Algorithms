import styles from './Comparison.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import { Fragment, useEffect, useRef, useState } from 'react';
import StructureManageArea from '../components/comparison-add-edit-area/StructureManageArea';
import ComparisonTableOverview from '../components/comparison-table/ComparisonTableOverview';
import ComparisonTableDetails from '../components/comparison-table/ComparisonTableDetails';
import ComparisonTableExamplesWithMethods from '../components/comparison-table/ComparasionTableExamplesAndMethods';
import PagesDataStructures from './pages-data/pages-data';
import { BinarySearchTree, AVLTree, BTree } from './pages-data/pages-data';
import { EmptyUnit } from './pages-data/pages-data';

function ComparisonPage() {
    const AddButtons = useRef([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [tableData, setTableData] = useState([EmptyUnit, EmptyUnit, EmptyUnit]);
    let dataStructuresDetails = PagesDataStructures;
    dataStructuresDetails = dataStructuresDetails.concat([BinarySearchTree, AVLTree, BTree]);

    if (AddButtons.current[0] != undefined) {
        for (let i = 0; i < 3; i++) {
            const width = AddButtons.current[i].offsetWidth;
            AddButtons.current[i].style.height = (width * 0.825).toString() + 'px';
        }
        AddButtons.current = AddButtons.current.slice(0, 3);
    }

    const updateTableDataHandler = (structureTitle, index) => {
        if (structureTitle == 'HashTable') {
            structureTitle = 'HashTable (Dictionary)';
        }
        let title = structureTitle.replace(' ', '').replace('-', '')
            .replace('(', '').replace(')', '');
        console.log(title);

        let foundStructure = dataStructuresDetails.find(struct => {
            return struct.name.toLowerCase().replace(' ', '').replace('-', '')
                .replace('(', '').replace(')', '') == title.toLowerCase();
        });

        if (foundStructure == undefined) {
            foundStructure = EmptyUnit;
        }

        setTableData((prevState) => {
            let currState = [...prevState];
            currState[index] = foundStructure;
            return currState;
        });
        console.log(tableData);
    };

    useEffect(() => {
        let emptySelects = 0;
        tableData.forEach(table => {
            if (table.name == '\u2014') {
                emptySelects = emptySelects + 1;
            }
        });

        if (emptySelects > 1) {
            setIsTableVisible(false);
        }
        else {
            setIsTableVisible(true);
        }
    }, [tableData]);

    return (
        <Fragment>
            <img src={require(`./pages-images/background-comparison.jpg`)} 
                className={styles.background}
            />
            <Container fluid className="containerPage" style={{paddingTop: '30px'}}>
                <Row className={styles.addStructureRow}>
                    <Col xs={12} sm={6} md={4} className={styles.addStructureArea} 
                        ref={element => (AddButtons.current = [...AddButtons.current, element])}>
                        <StructureManageArea updateTable={updateTableDataHandler} index={0}>

                        </StructureManageArea>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.addStructureArea} 
                        ref={element => (AddButtons.current = [...AddButtons.current, element])}>
                        <StructureManageArea updateTable={updateTableDataHandler} index={1}>
                            
                        </StructureManageArea>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={styles.addStructureArea} 
                        ref={element => (AddButtons.current = [...AddButtons.current, element])}>
                        <StructureManageArea updateTable={updateTableDataHandler} index={2}>
                            
                        </StructureManageArea>
                    </Col>
                </Row>
                {isTableVisible && <ComparisonTableOverview tableData={tableData}>
                    </ComparisonTableOverview>}
                {isTableVisible && <ComparisonTableDetails tableData={tableData}>
                    </ComparisonTableDetails>}
                {isTableVisible && <ComparisonTableExamplesWithMethods tableData={tableData}>
                    </ComparisonTableExamplesWithMethods>}
            </Container>
        </Fragment>
    )
}

export default ComparisonPage;