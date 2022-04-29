import styles from './ComparisonTable.module.css';
import { Table } from 'react-bootstrap';

function ComparisonTableExamplesWithMethods(props) {
    return (
        <Table hover responsive striped className={styles.comparisonTable}>
            <thead>
                <tr>
                    <th colSpan={12}>Example Usage & Methods</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>When To Use?</td>
                </tr>
                <tr>
                    {props.tableData[0].usage[0].text != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[0].usage.map(useType => {
                                    return <li>{useType.text}</li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[1].usage[0].text != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[1].usage.map(useType => {
                                    return <li>{useType.text}</li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[2].usage[0].text != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[2].usage.map(useType => {
                                    return <li>{useType.text}</li>
                                })}
                            </ul>
                        </td>
                    }
                </tr>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Real Applications</td>
                </tr>
                <tr>
                    {props.tableData[0].examples[0].title != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[0].examples.map(example => {
                                    return <li>
                                        <h4 className={styles.primaryText}>
                                            {example.title}
                                        </h4>
                                        <h6 className={styles.secondaryText}>
                                            {example.description}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[1].examples[0].title != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[1].examples.map(example => {
                                    return <li>
                                        <h4 className={styles.primaryText}>
                                            {example.title}
                                        </h4>
                                        <h6 className={styles.secondaryText}>
                                            {example.description}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[2].examples[0].title != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[2].examples.map(example => {
                                    return <li>
                                        <h4 className={styles.primaryText}>
                                            {example.title}
                                        </h4>
                                        <h6 className={styles.secondaryText}>
                                            {example.description}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                </tr>
                <tr>
                    <td colSpan={12} className={styles.sectionHeader}>Some Methods</td>
                </tr>
                <tr>
                    {props.tableData[0].methods.methodsList[0].boldPart != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[0].methods.methodsList.map(method => {
                                    return <li>
                                        <h4 className={styles.primaryTextBig}>
                                            {method.boldPart}
                                        </h4>
                                        <h6 className={styles.secondaryTextAlternative}>
                                            {method.rest}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[1].methods.methodsList[0].boldPart != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[1].methods.methodsList.map(method => {
                                    return <li>
                                        <h4 className={styles.primaryTextBig}>
                                            {method.boldPart}
                                        </h4>
                                        <h6 className={styles.secondaryTextAlternative}>
                                            {method.rest}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                    {props.tableData[2].methods.methodsList[0].boldPart != '\u2014' &&
                        <td className={styles.listCell} colSpan={4}>
                            <ul>
                                {props.tableData[2].methods.methodsList.map(method => {
                                    return <li>
                                        <h4 className={styles.primaryTextBig}>
                                            {method.boldPart}
                                        </h4>
                                        <h6 className={styles.secondaryTextAlternative}>
                                            {method.rest}
                                        </h6>
                                    </li>
                                })}
                            </ul>
                        </td>
                    }
                </tr>
            </tbody>
        </Table>
    )
}

export default ComparisonTableExamplesWithMethods;

