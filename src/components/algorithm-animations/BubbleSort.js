import { useMemo, useRef, useState } from 'react';
import styles from './Animation.module.css';

function BubbleSortAnimation(props) {
    const arrayHTMLObjects = useRef([]);
    const [InitialArray, setInitialArray] = useState([6, 3, 5, 4, 2, 1]);
    let subLimitLoop = 5;

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
        if (secondIdx > subLimitLoop) {
            arrayHTMLObjects.current[0].classList.add(styles.arrayObjectActive);
            arrayHTMLObjects.current[1].classList.add(styles.arrayObjectActive);
        }
        else {
            arrayHTMLObjects.current[firstIdx].classList.add(styles.arrayObjectActive);
            arrayHTMLObjects.current[secondIdx].classList.add(styles.arrayObjectActive);
        }
        resolve();
    }

    const PlayAnimationHanlder = async function(event) {
        event.preventDefault();
        arrayHTMLObjects.current[0].classList.add(styles.arrayObjectActive);
        arrayHTMLObjects.current[1].classList.add(styles.arrayObjectActive);

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < (5 - i); j++) {
                await ReplaceElementsInHTML(1000, j + 1, j + 2);

                setInitialArray((prevState) => {
                    if (prevState[j] > prevState[j + 1]) {
                        let currState = [...prevState];
                        const tempValue = prevState[j + 1];
                        currState[j + 1] = prevState[j];
                        currState[j] = tempValue;

                        return currState;
                    }
                    else {
                        return prevState;
                    }
                });
            }

            subLimitLoop = subLimitLoop - 1;
        }

        setInitialArray((prevState) => {
            let currState = [...prevState];
            return currState;
        });
        arrayHTMLObjects.current[0].classList.remove(styles.arrayObjectActive);
        arrayHTMLObjects.current[1].classList.remove(styles.arrayObjectActive);
    }

    const RestartHanlder = () => {
        setInitialArray([6, 3, 5, 4, 2, 1]);
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

export default BubbleSortAnimation;