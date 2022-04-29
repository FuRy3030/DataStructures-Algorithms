import styles from './TableContent.module.css';

function TableContent(props) {
    console.log(props);
    const scrollIntoElement = (elementPosition) => {
        props.pageElements[elementPosition].current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    return (
        <div className={styles.leftBar}>
            <h3>Table of Contents</h3>
            <hr />
            <h5 onClick={scrollIntoElement.bind(null, 0)}>Visualisation</h5>
            <h5 onClick={scrollIntoElement.bind(null, 1)}>Complexity</h5>
            <h5 onClick={scrollIntoElement.bind(null, 2)}>Explanation</h5>
            <h5 onClick={scrollIntoElement.bind(null, 3)}>Hints</h5>
            <h5 onClick={scrollIntoElement.bind(null, 4)}>Pros & Cons</h5>
            <h5 onClick={scrollIntoElement.bind(null, 5)}>When to Use?</h5>
            <h5 onClick={scrollIntoElement.bind(null, 6)}>Usage Examples</h5>
            <h5 onClick={scrollIntoElement.bind(null, 7)}>Methods</h5>
        </div>
    );
}

export default TableContent;