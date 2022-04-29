import styles from './complexity-info-table-dsa.module.css';
import { Table } from 'react-bootstrap';
import React from 'react';

function ComplexityInfoTableDSA(props) {
    const timeComplexities = [];
    props.time.forEach(complexity => {
        switch(complexity) {
            case 'N/A':
                timeComplexities.push({complexity: complexity, color: '#bdc3c7'});
                break;
            case 'O(1)':
                timeComplexities.push({complexity: complexity, color: '#009432'});
                break;
            case 'O(n)':
                timeComplexities.push({complexity: complexity, color: '#e74c3c'});
                break;
            case 'O(log(n))':
                timeComplexities.push({complexity: complexity, color: '#badc58'});
                break;
        }
    });

    return (
        <Table hover responsive className={styles.table} ref={props.tableRef}>
            <thead>
                <tr>
                    <th colSpan={8} className={styles.biggestHeader}>Time Complexity</th>
                    <th className={styles.biggestHeader}>Memory</th>
                </tr>
                <tr>
                    <th colSpan={4} className={styles.mediumHeader}>Average</th>
                    <th colSpan={4} className={styles.mediumHeader}>Worst</th>
                    <th className={styles.mediumHeader}>Worst</th>
                </tr>
                <tr>
                    <th className={styles.smallestHeader}>Access</th>
                    <th className={styles.smallestHeader}>Search</th>
                    <th className={styles.smallestHeader}>Insertion</th>
                    <th className={styles.smallestHeader}>Deletion</th>
                    <th className={styles.smallestHeader}>Access</th>
                    <th className={styles.smallestHeader}>Search</th>
                    <th className={styles.smallestHeader}>Insertion</th>
                    <th className={styles.smallestHeader}>Deletion</th>
                    <th className={styles.smallestHeader}>-</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {timeComplexities.map(singleVariantComplexity => {
                        return <td style={{color: singleVariantComplexity.color}}>
                                    {singleVariantComplexity.complexity}
                               </td>
                    })}
                    <td style={{color: '#4834d4'}}>{props.memory}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ComplexityInfoTableDSA;