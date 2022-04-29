import styles from './CodeSnippet.module.css';
import Prism from 'prismjs';
import { Fragment } from 'react';
import './prism.css';

function CodeSnippet(props) {
    Prism.highlightAll();
    return (
        <div ref={props.codeRef}>
            <h2 className={styles.header}>C# Code Snippet</h2>
            <pre className={styles.code}>
                <code className="language-javascript">
                    {props.code}
                </code>
            </pre>
        </div>
    )
}

export default CodeSnippet;