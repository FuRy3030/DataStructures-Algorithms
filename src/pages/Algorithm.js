import styles from './Algorithm.module.css'
import { useRef } from 'react';
import TableContentAlgo from '../components/table-content-bar/TableContentAlgo';
import ComplexityInfoTableAlgo from '../components/complexity-info-table/complexity-info-table-algo';
import BubbleSortAnimation from '../components/algorithm-animations/BubbleSort';
import QuickSortAnimation from '../components/algorithm-animations/QuickSort';
import MergeSortAnimation from '../components/algorithm-animations/MergeSort';
import ProsCons from '../components/pros-cons/ProsCons';
import '../style.css';

function Algorithm(props) {
    const image = useRef(null);
    const table = useRef(null);
    const description = useRef(null);
    const animation = useRef(null);
    const plusesMinuses = useRef(null);

    const refs = [
        image,
        table,
        description,
        animation,
        plusesMinuses
    ];

    const renderSwitch = () => {
        switch (props.algorithmData.name) { 
            case 'Bubble Sort':
                return <BubbleSortAnimation animationRef={animation}/>
            case 'Quick Sort':
                return <QuickSortAnimation animationRef={animation}/>
            case 'Merge Sort':
                return <MergeSortAnimation animationRef={animation}/>
        }
    }

    return (
        <div className={styles.wholePage} style={{paddingTop: '75px'}}>
            <TableContentAlgo pageElements={refs}/>
            <div className={styles.content}>
                <h1 className={styles.algoName}>{props.algorithmData.name}</h1>
                <img 
                    ref={image}
                    className={styles.algoIMG} 
                    src={require(`./pages-images/${props.algorithmData.mainImgPath}`)} 
                />
                <ComplexityInfoTableAlgo
                    tableRef={table}
                    time={props.algorithmData.timeComplexities} 
                    memory={props.algorithmData.spaceComplexity} 
                />
                <div className={styles.explanation} ref={description} style={{margin: '50px 0px'}}>
                    <h2 className={styles.descriptionHeader}>{props.algorithmData.descriptionTitle}</h2>
                    <p className={styles.description}>{props.algorithmData.description}</p>
                </div>
                {renderSwitch()}
                <ProsCons prosConsList={props.algorithmData.prosCons} 
                    ProsConsRef={plusesMinuses}/>
            </div>
        </div>
    )
}

export default Algorithm;