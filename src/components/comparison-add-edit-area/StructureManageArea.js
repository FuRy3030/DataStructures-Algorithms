import { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap';
import styles from './StructureManageArea.module.css';
import { DataStructureList } from '../../pages-parts/data-struct-and-algo/DataStructuresAndAlgorythyms';
import CardShortcut from '../card-shortcut/CardShortcut';

function StructureManageArea(props) {
    const [chosenElementData, setChosenElementData] = useState({
        title: '',
        imgName: 'array.png'
    });

    const AddButtonClickHandler = (event) => {
        const SelectStructureInput = event.currentTarget.nextSibling;
        if (window.getComputedStyle(SelectStructureInput).getPropertyValue('display') == 'none') {
            SelectStructureInput.style.display = 'block';
        }
        else {
            const selectedValue = SelectStructureInput.options
                [SelectStructureInput.selectedIndex].value;
            const selectedElementData = DataStructureList.
                find(struct => struct.title.toLowerCase() == selectedValue);

            if (selectedElementData != undefined) {
                if (selectedElementData.title == 'Binary Search Tree') {
                    setChosenElementData({...selectedElementData, title: 'B-Search Tree'});
                }
                else {
                    setChosenElementData(selectedElementData);
                }

                SelectStructureInput.nextSibling.nextSibling.style.display = 'block';
                SelectStructureInput.nextSibling.style.display = 'flex';
                SelectStructureInput.style.display = 'none';
                event.currentTarget.style.display = 'none';

                props.updateTable(selectedElementData.title, props.index);
            }
            else {
                props.updateTable('', props.index);
            }
        }
    };

    const EditButtonClickHandler = (event) => {
        const currentStructureDetails = event.currentTarget.parentElement;
        currentStructureDetails.style.display = 'none';
        currentStructureDetails.previousSibling.style.display = 'block';
        currentStructureDetails.previousSibling.previousSibling.style.display = 'flex';
        currentStructureDetails.nextSibling.style.display = 'none';

        props.updateTable('', props.index);
    };

    const CloseButtonClickHandler = (event) => {
        const currentStructureDetails = event.currentTarget.previousSibling;
        event.currentTarget.style.display = 'none';
        currentStructureDetails.previousSibling.style.display = 'block';
        currentStructureDetails.previousSibling.previousSibling.style.display = 'flex';
        currentStructureDetails.style.display = 'none';

        props.updateTable('', props.index);
    };

    return (
        <Fragment>
            <div className={styles.addStructureInnerArea}>
                <div className={styles.addButton} onClick={AddButtonClickHandler}>
                    <i className={`fa-solid fa-circle-plus ${styles.addIcon}`}></i>
                    <h6 className={styles.addStructureText}>Add Structure</h6>
                </div>
                <Form.Select className={styles.structureSelect}>
                    <option>Choose Data Structure</option>
                    <option value="array">Array</option>
                    <option value="stack">Stack</option>
                    <option value="queue">Queue</option>
                    <option value="list">List</option>
                    <option value="linked-list">Linked List</option>
                    <option value="hashtable">HashTable (Dictionary)</option>
                    <option value="hash set">Hash Set</option>
                    <option value="binary search tree">Binary Search Tree</option>
                    <option value="avl tree">AVL Tree</option>
                    <option value="b-tree">B-Tree</option>
                </Form.Select>
                <div className={styles.chosenDataStructure}>
                    <img className={styles.chosenDataStructureIMG}
                        src={require(`../card-shortcut/images-shortcuts/${chosenElementData.imgName}`)} 
                    />
                    <h5 className={styles.chosenDataStructureText}>{chosenElementData.title}</h5>
                    <button className={styles.editButton} onClick={EditButtonClickHandler}>
                        Edit <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                </div>
                <i className={`fa-regular fa-circle-xmark ${styles.exitIcon}`} 
                    onClick={CloseButtonClickHandler}>
                </i>
            </div>
        </Fragment>
    )
}

export default StructureManageArea;