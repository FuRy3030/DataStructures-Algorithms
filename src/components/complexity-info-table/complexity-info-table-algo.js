import styles from './complexity-info-table-dsa.module.css';
import { Table } from 'react-bootstrap';
import React from 'react';

function ComplexityInfoTableAlgo(props) {
    let memoryColor = '';
    const timeComplexities = [];
    props.time.forEach(complexity => {
        switch(complexity) {
            case 'O(1)':
                timeComplexities.push({complexity: complexity, color: '#009432'});
                break;
            case 'O(n)':
                timeComplexities.push({complexity: complexity, color: '#f1c40f'});
                break;
            case 'O(log(n))':
                timeComplexities.push({complexity: complexity, color: '#badc58'});
                break;
            case 'O(n^2)':
                timeComplexities.push({complexity: complexity, color: '#e74c3c'});
                break;
            case 'O(n*log(n))':
                timeComplexities.push({complexity: complexity, color: '#F79F1F'});
                break;
        }
    });

    switch (props.memory) {
        case 'O(1)':
            memoryColor = '#009432';
            break;
        case 'O(n^2)':
            memoryColor = '#e74c3c';
            break;
        case 'O(n)':
            memoryColor = '#f1c40f';
            break;
        case 'O(log(n))':
            memoryColor = '#badc58';
            break;
        case 'O(n*log(n))':
            memoryColor = '#F79F1F';
            break;
    }

    return (
        <Table hover responsive className={styles.table} ref={props.tableRef}>
            <thead>
                <tr>
                    <th colSpan={9} className={`${styles.biggestHeader} ${styles.bigHeaderAlgo}`}>
                        Time Complexity
                    </th>
                    <th colSpan={3} className={`${styles.biggestHeader} ${styles.bigHeaderAlgo}`}>
                        Memory
                    </th>
                </tr>
                <tr>
                    <th colSpan={3} className={`${styles.mediumHeader} ${styles.medHeaderAlgo}`}>
                        Best
                    </th>
                    <th colSpan={3} className={`${styles.mediumHeader} ${styles.medHeaderAlgo}`}>
                        Average
                    </th>
                    <th colSpan={3} className={`${styles.mediumHeader} ${styles.medHeaderAlgo}`}>
                        Worst
                    </th>
                    <th colSpan={3} className={`${styles.mediumHeader} ${styles.medHeaderAlgo}`}>
                        Worst
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {timeComplexities.map(singleVariantComplexity => {
                        return <td colSpan={3} className={styles.mediumValue} 
                                style={{color: singleVariantComplexity.color}}>
                                    {singleVariantComplexity.complexity}
                               </td>
                    })}
                    <td className={styles.mediumValue} colSpan={3} style={{color: memoryColor}}>
                        {props.memory}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ComplexityInfoTableAlgo;