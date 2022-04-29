import { useMemo, useRef, useState } from 'react';
import styles from './Animation.module.css';

function QuickSortAnimation(props) {
    const arrayHTMLObjects = useRef([]);
    const [InitialArray, setInitialArray] = useState([7, 6, 10, 4, 1, 3]);

    const setElementsHeight = useMemo(() => {
        if (arrayHTMLObjects.current[0] != undefined) {
            for (let i = 0; i < 6; i++) {
                const width = arrayHTMLObjects.current[i].offsetWidth;
                arrayHTMLObjects.current[i].style.height = width.toString() + 'px';
            }
            arrayHTMLObjects.current = arrayHTMLObjects.current.slice(0, 6);
        }
    }, [arrayHTMLObjects.current[0]]);

    const ReplaceElementsInHTML = (time, firstIndex, secondIndex) => {
        return new Promise(resolve => { 
            const firstIdx = firstIndex; 
            const secondIdx = secondIndex;
            setTimeout(MarkElements.bind(null, firstIdx, secondIdx, resolve), time);
        });
    }

    const MarkElements = (firstIdx, secondIdx, resolve = () => {}) => {
        for (let i = 0; i < 6; i++) {
            arrayHTMLObjects.current[i].classList.remove(styles.arrayObjectActive);
        }

        if (firstIdx != secondIdx) {
            arrayHTMLObjects.current[firstIdx].classList.add(styles.arrayObjectActive);
            arrayHTMLObjects.current[secondIdx].classList.add(styles.arrayObjectActive);
        }
        resolve();
    }

    const PartitionArrayAscending = async function(currentArray, left, right) {
        let i = left;
        let j = right;
        let pivot = currentArray[Math.floor((left + right) / 2)];
        console.log(`${left} ${right}`);

        while (i <= j) {
            console.log('b');
            while (currentArray[i] < pivot) 
            {
                i++;
            }
            while (currentArray[j] > pivot) 
            {
                j--;
            }
            console.log(i);
            console.log(j);
            console.log(pivot);

            if (i <= j) {
                await ReplaceElementsInHTML(1000, i, j);

                const tempValue = currentArray[i];
                currentArray[i] = currentArray[j];
                currentArray[j] = tempValue;

                setInitialArray([...currentArray]);
                console.log(currentArray);                    

                if (i == j) {
                    break;
                }
            }
        }

        return i;
    }

    const QuickSort = async function(currentArray, left, right) {
        if (currentArray.length > 1) {
            let index;
            index = await PartitionArrayAscending(currentArray, left, right);

            if (left < index) {
                await QuickSort(currentArray, left, index - 1);
            }

            if (index + 1 < right) {
                await QuickSort(currentArray, index + 1, right);
            }
        }
    }

    const PlayAnimationHanlder = async function(event) {
        event.preventDefault();
        let currentArray = [];
        await setInitialArray((prevState) => {
            currentArray = [...prevState];
            return prevState;
        });

        await QuickSort(currentArray, 0, 5);
    }

    const RestartHanlder = () => {
        setInitialArray(() => {
            return [7, 6, 10, 4, 1, 3];
        });
    }

    return (
        <div className={styles.animationSection} ref={props.animationRef}>
            <h3><i className="fa-solid fa-gears"></i> Animation Step By Step</h3>
            <div className={styles.currentArray}>
                {InitialArray.map(arrayElement => {
                return <div className={styles.arrayObject}  
                ref={element => (arrayHTMLObjects.current = [...arrayHTMLObjects.current, element])}>
                            {arrayElement}
                        </div>
                })}
            </div>
            <div className={styles.buttonsArea}>
                <button onClick={RestartHanlder}>
                    <i className="fa-solid fa-rotate"></i> Restart
                </button>
                <button onClick={PlayAnimationHanlder}>
                    <i className="fa-regular fa-circle-play"></i> Play
                </button>
            </div>
        </div>
    )
}

export default QuickSortAnimation;