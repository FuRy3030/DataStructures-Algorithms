import styles from './DataStructuresAndAlgorythyms.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardShortcut from '../../components/card-shortcut/CardShortcut';
import CardShortcutAlgo from '../../components/card-shortcut/CardShortcutAlgo';
import { useEffect, useState } from 'react';
import { Algorithms } from '../../pages/pages-data/pages-data';

const ShortcutsList = [
    {
        id: 0,
        type: 'DataStructure',
        title: 'Array',
        imgName: 'array.png',
        accessComplexity: 'O(1)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(n)',
        deletionComplexity: 'O(n)'
    },
    {
        id: 1,
        type: 'DataStructure',
        title: 'Queue',
        imgName: 'queue.png',
        accessComplexity: 'O(n)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(1)',
        deletionComplexity: 'O(1)'
    },
    {
        id: 2,
        type: 'DataStructure',
        title: 'Stack',
        imgName: 'stack.png',
        accessComplexity: 'O(n)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(1)',
        deletionComplexity: 'O(1)'
    },
    {
        id: 3,
        type: 'DataStructure',
        title: 'List',
        imgName: 'list.png',
        accessComplexity: 'O(1)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(n)',
        deletionComplexity: 'O(n)'
    },
    {
        id: 4,
        type: 'DataStructure',
        title: 'Linked-List',
        imgName: 'linked-list.png',
        accessComplexity: 'O(n)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(1)',
        deletionComplexity: 'O(1)'
    },
    {
        id: 5,
        type: 'DataStructure',
        title: 'HashTable',
        imgName: 'hashtable.png',
        accessComplexity: 'O(1)',
        searchComplexity: 'O(n)',
        insertionComplexity: 'O(1)',
        deletionComplexity: 'O(1)'
    },
    {
        id: 6,
        type: 'DataStructure',
        title: 'Hash Set',
        imgName: 'hashset.png',
        accessComplexity: 'N/A',
        searchComplexity: 'O(1)',
        insertionComplexity: 'O(1)',
        deletionComplexity: 'O(1)'
    },
    // {
    //     id: 7,
    //     type: 'DataStructure',
    //     title: 'Binary Tree',
    //     imgName: 'binary-tree.png',
    //     accessComplexity: 'O(log(n))',
    //     searchComplexity: 'O(log(n))',
    //     insertionComplexity: 'O(log(n))',
    //     deletionComplexity: 'O(log(n))'
    // },
    {
        id: 8,
        type: 'DataStructure',
        title: 'Binary Search Tree',
        imgName: 'binary-search-tree.png',
        accessComplexity: 'O(log(n))',
        searchComplexity: 'O(log(n))',
        insertionComplexity: 'O(log(n))',
        deletionComplexity: 'O(log(n))'
    },
    {
        id: 9,
        type: 'DataStructure',
        title: 'AVL Tree',
        imgName: 'avl-tree.png',
        accessComplexity: 'O(log(n))',
        searchComplexity: 'O(log(n))',
        insertionComplexity: 'O(log(n))',
        deletionComplexity: 'O(log(n))'
    },
    // {
    //     id: 10,
    //     type: 'DataStructure',
    //     title: 'Undirected Graph',
    //     imgName: 'undirected-graph.png',
    //     accessComplexity: 'O(log(n))',
    //     searchComplexity: 'O(log(n))',
    //     insertionComplexity: 'O(log(n))',
    //     deletionComplexity: 'O(log(n))'
    // },
    // {
    //     id: 11,
    //     type: 'DataStructure',
    //     title: 'Directed Graph',
    //     imgName: 'directed-graph.png',
    //     accessComplexity: 'O(log(n))',
    //     searchComplexity: 'O(log(n))',
    //     insertionComplexity: 'O(log(n))',
    //     deletionComplexity: 'O(log(n))'
    // },
    {
        id: 12,
        type: 'DataStructure',
        title: 'B-Tree',
        imgName: 'b-tree.png',
        accessComplexity: 'O(log(n))',
        searchComplexity: 'O(log(n))',
        insertionComplexity: 'O(log(n))',
        deletionComplexity: 'O(log(n))'
    }
];

const ShortcutsListAlgorithms = [
    {
        id: 0,
        type: 'Algorithm',
        title: 'Bubble Sort',
        imgName: 'bubblesort.png',
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 1,
        type: 'Algorithm',
        title: 'Quick Sort',
        imgName: 'quicksort.png',
        timeComplexity: 'O(n*log(n))',
        spaceComplexity: 'O(log(n))'
    },
    {
        id: 2,
        type: 'Algorithm',
        title: 'Merge Sort',
        imgName: 'mergesort.png',
        timeComplexity: 'O(n*log(n))',
        spaceComplexity: 'O(n)'
    }
]

function DataStructuresAndAlgorythyms() {
    // const searchBarValue = useSelector((state) => state.search.value);
    // const [OutputList, setOutputList] = useState([]);

    // useEffect(() => {
    //     const newList = ShortcutsList.filter(element => {
    //         return element.title.toLowerCase().includes(searchBarValue.toLowerCase().trim());
    //     });
    //     setOutputList(newList);
    // }, [searchBarValue]);

    return (
        <Container fluid="lg" style={{ marginTop: '40px' }}>
            <h2 className={styles.header}>
                <i className="bi bi-stack"></i> Data Structures
            </h2>
            <Row id="DataStructures">
                {ShortcutsList.map(shortcut => {
                    return (
                        <Col xs={12} md={4} style={{padding: '30px'}}>
                            <CardShortcut 
                                key={shortcut.id} 
                                title={shortcut.title != 'Binary Search Tree' ? 
                                    shortcut.title : 'B-Search Tree'} 
                                targetPath={shortcut.imgName}
                                access={shortcut.accessComplexity}
                                search={shortcut.searchComplexity}
                                insertion={shortcut.insertionComplexity}
                                deletion={shortcut.deletionComplexity}
                            />
                        </Col>
                    )
                })}
            </Row>
            <h2 className={styles.header}>
                <i className="bi bi-gear-wide-connected"></i> Sorting Algorithms
            </h2>
            <Row id="Algorithms">
                {ShortcutsListAlgorithms.map(shortcut => {
                    return (
                        <Col xs={12} md={4} style={{padding: '30px'}}>
                            <CardShortcutAlgo 
                                key={shortcut.id} 
                                title={shortcut.title} 
                                targetPath={shortcut.imgName}
                                time={shortcut.timeComplexity}
                                space={shortcut.spaceComplexity}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default DataStructuresAndAlgorythyms;
export const DataStructureList = ShortcutsList;
export const AlgorithmsList = ShortcutsListAlgorithms;