import styles from './ComparisonTable.module.css';
import { Table } from 'react-bootstrap';

function ComparisonTableOverview(props) {
    return (
        <Table hover responsive striped className={styles.comparisonTable}>
            <thead>
                <tr>
                    <th colSpan={12}>Comparison Overview</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Structure Name</td>
                </tr>
                <tr>
                    <td colSpan={4} className={styles.singleLineData}>
                        <i className="fa-solid fa-code"></i> {props.tableData[0].name}
                    </td>
                    <td colSpan={4} className={styles.singleLineData}>
                        <i className="fa-solid fa-code"></i> {props.tableData[1].name}
                    </td>
                    <td colSpan={4} className={styles.singleLineData}>
                        <i className="fa-solid fa-code"></i> {props.tableData[2].name}
                    </td>
                </tr>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Average Time Complexity</td>
                </tr>
                <tr>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                            <li>Access: {props.tableData[0].timeComplexities[0]};</li>
                            <li>Search: {props.tableData[0].timeComplexities[1]};</li>
                            <li>Insertion: {props.tableData[0].timeComplexities[2]};</li>
                            <li>Deletion: {props.tableData[0].timeComplexities[3]};</li>
                        </ul>
                    </td>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                        <li>Access: {props.tableData[1].timeComplexities[0]};</li>
                            <li>Search: {props.tableData[1].timeComplexities[1]};</li>
                            <li>Insertion: {props.tableData[1].timeComplexities[2]};</li>
                            <li>Deletion: {props.tableData[1].timeComplexities[3]};</li>
                        </ul>
                    </td>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                        <li>Access: {props.tableData[2].timeComplexities[0]};</li>
                            <li>Search: {props.tableData[2].timeComplexities[1]};</li>
                            <li>Insertion: {props.tableData[2].timeComplexities[2]};</li>
                            <li>Deletion: {props.tableData[2].timeComplexities[3]};</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Worst Time Complexity</td>
                </tr>
                <tr>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                            <li>Access: {props.tableData[0].timeComplexities[4]};</li>
                            <li>Search: {props.tableData[0].timeComplexities[5]};</li>
                            <li>Insertion: {props.tableData[0].timeComplexities[6]};</li>
                            <li>Deletion: {props.tableData[0].timeComplexities[7]};</li>
                        </ul>
                    </td>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                        <li>Access: {props.tableData[1].timeComplexities[4]};</li>
                            <li>Search: {props.tableData[1].timeComplexities[5]};</li>
                            <li>Insertion: {props.tableData[1].timeComplexities[6]};</li>
                            <li>Deletion: {props.tableData[1].timeComplexities[7]};</li>
                        </ul>
                    </td>
                    <td className={styles.listCell} colSpan={4}>
                        <ul>
                        <li>Access: {props.tableData[2].timeComplexities[4]};</li>
                            <li>Search: {props.tableData[2].timeComplexities[5]};</li>
                            <li>Insertion: {props.tableData[2].timeComplexities[6]};</li>
                            <li>Deletion: {props.tableData[2].timeComplexities[7]};</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Space Complexity</td>
                </tr>
                <tr>
                    <td colSpan={4} className={styles.singleLineData}>
                        {props.tableData[0].spaceComplexity}
                    </td>
                    <td colSpan={4} className={styles.singleLineData}>
                        {props.tableData[1].spaceComplexity}
                    </td>
                    <td colSpan={4} className={styles.singleLineData}>
                        {props.tableData[2].spaceComplexity}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ComparisonTableOverview;