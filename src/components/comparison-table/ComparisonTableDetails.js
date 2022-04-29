import styles from './ComparisonTable.module.css';
import { Table, Offcanvas } from 'react-bootstrap';
import { Fragment, useState } from 'react';

function ComparisonTableDetails(props) {
    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const handleCloseThird = () => setShowThird(false);
    const handleShowThird = () => setShowThird(true);

    return (
        <Fragment>
            <Table hover responsive striped className={styles.comparisonTable}>
                <thead>
                    <tr>
                        <th colSpan={12}>Structure Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={12} className={styles.sectionHeader}>Description</td>
                    </tr>
                    <tr>
                        {props.tableData[0].description != '\u2014' && <td colSpan={4}>
                            <h5 className={styles.descriptionShow} onClick={handleShow}>
                                Check Description <i className="fa-solid fa-up-right-from-square"></i>
                            </h5>
                        </td>}
                        {props.tableData[1].description != '\u2014' && <td colSpan={4}>
                            <h5 className={styles.descriptionShow} onClick={handleShowSecond}>
                                Check Description <i className="fa-solid fa-up-right-from-square"></i>
                            </h5>
                        </td>}
                        {props.tableData[2].description != '\u2014' && <td colSpan={4}>
                            <h5 className={styles.descriptionShow} onClick={handleShowThird}>
                                Check Description <i className="fa-solid fa-up-right-from-square"></i>
                            </h5>
                        </td>}
                    </tr>
                    <tr>
                        <td colSpan={12} className={styles.sectionHeader}>Advantages</td>
                    </tr>
                    <tr>
                        {props.tableData[0].prosCons.pros[0] != '\u2014' &&
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[0].prosCons.pros.map(advantage => {
                                        return <li>{advantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                        {props.tableData[1].prosCons.pros[0] != '\u2014' && 
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[1].prosCons.pros.map(advantage => {
                                        return <li>{advantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                        {props.tableData[2].prosCons.pros[0] != '\u2014' && 
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[2].prosCons.pros.map(advantage => {
                                        return <li>{advantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                    </tr>
                    <tr>
                        <td colSpan={12} className={styles.sectionHeader}>Disadvantages</td>
                    </tr>
                    <tr>
                        {props.tableData[0].prosCons.cons[0] != '\u2014' && 
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[0].prosCons.cons.map(disadvantage => {
                                        return <li>{disadvantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                        {props.tableData[1].prosCons.cons[0] != '\u2014' && 
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[1].prosCons.cons.map(disadvantage => {
                                        return <li>{disadvantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                        {props.tableData[2].prosCons.cons[0] != '\u2014' && 
                            <td className={styles.listCell} colSpan={4}>
                                <ul>
                                    {props.tableData[2].prosCons.cons.map(disadvantage => {
                                        return <li>{disadvantage}</li>
                                    })}
                                </ul>
                            </td>
                        }
                    </tr>
                </tbody>
            </Table>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={styles.popUpHeader}>
                        {props.tableData[0].descriptionTitle}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.popUpBody}>
                    {props.tableData[0].description}
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showSecond} onHide={handleCloseSecond}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={styles.popUpHeader}>
                        {props.tableData[1].descriptionTitle}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.popUpBody}>
                    {props.tableData[1].description}
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showThird} onHide={handleCloseThird}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={styles.popUpHeader}>
                        {props.tableData[2].descriptionTitle}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.popUpBody}>
                    {props.tableData[2].description}
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}

export default ComparisonTableDetails;