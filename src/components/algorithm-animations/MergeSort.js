import { useMemo, useRef, useState } from 'react';
import styles from './Animation.module.css';

function MergeSortAnimation(props) {
    const arrayHTMLObjects = useRef([]);
    const [InitialArray, setInitialArray] = useState([6, 5, 7, 4, 1, 3]);
    const arrayForCopiedValues = [];

    const setElementsHeight = useMemo(() => {
        if (arrayHTMLObjects.current[0] != undefined) {
            for (let i = 0; i < 6; i++) {
                const width = arrayHTMLObjects.current[i].offsetWidth;
                arrayHTMLObjects.current[i].style.height = width.toString() + 'px';
            }
            arrayHTMLObjects.current = arrayHTMLObjects.current.slice(0, 6);
        }
    }, [arrayHTMLObjects.current[0]]);

    const ReplaceElementsInHTML = (time, firstIndex) => {
        return new Promise(resolve => { 
            const firstIdx = firstIndex; 
            setTimeout(MarkElements.bind(null, firstIdx, resolve), time);
        });
    }

    const MarkElements = (firstIdx, resolve = () => {}) => {
        for (let i = 0; i < 6; i++) {
            arrayHTMLObjects.current[i].classList.remove(styles.arrayObjectActive);
        }

        arrayHTMLObjects.current[firstIdx].classList.add(styles.arrayObjectActive);
        resolve();
    }

    const Merge = async function(currentArray, left, pivot, right) {
        let i = left;
        let j = pivot + 1;
 
        for (let i = left; i <= right; i++) {
            arrayForCopiedValues[i] = currentArray[i];  
        }
        
        for (let k = left; k <= right; k++) {
            if (i <= pivot) {
                if (j <= right) {
                    if (arrayForCopiedValues[j] < arrayForCopiedValues[i]) {
                        await ReplaceElementsInHTML(1000, k);

                        currentArray[k] = arrayForCopiedValues[j++];
                        setInitialArray([...currentArray]);
                    }
                    else {
                        await ReplaceElementsInHTML(1000, k);

                        currentArray[k] = arrayForCopiedValues[i++];
                        setInitialArray([...currentArray]);
                    }
                }
                else {
                    await ReplaceElementsInHTML(1000, k);

                    currentArray[k] = arrayForCopiedValues[i++];
                    setInitialArray([...currentArray]);
                }
            }
            else {
                await ReplaceElementsInHTML(1000, k);

                currentArray[k] = arrayForCopiedValues[j++];
                setInitialArray([...currentArray]);
            }
        }

        setInitialArray([...currentArray]);
    }

    const MergeSort = async function(currentArray, left, right) {
        if (left >= right) {
            return; 
        } 
        
        const pivot = Math.floor((left + right) / 2);
        
        await MergeSort(currentArray, left, pivot); 
        await MergeSort(currentArray, pivot + 1, right);
        
        await Merge(currentArray, left, pivot, right);
    }

    const PlayAnimationHanlder = async function(event) {
        event.preventDefault();
        let currentArray = [];
        await setInitialArray((prevState) => {
            currentArray = [...prevState];
            return prevState;
        });

        await MergeSort(currentArray, 0, 5);
        arrayHTMLObjects.current[5].classList.remove(styles.arrayObjectActive);
    }

    const RestartHanlder = () => {
        setInitialArray(() => {
            return [6, 5, 7, 4, 1, 3];
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

export default MergeSortAnimation;