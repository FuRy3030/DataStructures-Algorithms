import styles from './SearchBar.module.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBarActions } from '../../store/store';
import SearchBarResult from '../search-bar-result/SearchBarResult';
import SearchBarResultAlgo from '../search-bar-result/SearchBarResultAlgo';
import { useEffect, useState, useRef } from 'react';
import { DataStructureList } from '../../pages-parts/data-struct-and-algo/DataStructuresAndAlgorythyms';
import { AlgorithmsList } from '../../pages-parts/data-struct-and-algo/DataStructuresAndAlgorythyms';

function SearchBar(props) {
    const searchBarInput = useRef(null);
    const [suggestedResults, setSuggestedResults] = useState([]);
    const [areSuggestedResultsShown, setAreSuggestedResultsShown] = useState(false);
    const dispatch = useDispatch();

    const updateSearchValue = (event) => {
        const newValue = event.target.value;
        dispatch(SearchBarActions.changeSearchValue(newValue));
    };

    let currentSearchBarValue = useSelector(state => state.search.value);

    useEffect(() => {
        if (currentSearchBarValue == '') {
            setSuggestedResults([]);
            setAreSuggestedResultsShown(false);
        }
        else {
            const MatchingElements = DataStructureList.filter((currValue) => {
                const modifiedCurrentValue = currValue.title.replace(' ', '')
                    .replace('-', '').replace('/', '').toLowerCase();

                return modifiedCurrentValue.includes(currentSearchBarValue.toLowerCase()
                .replace(' ', '').replace('-', '').replace('/', ''));
            });

            const MatchingElementsAlgo = AlgorithmsList.filter((currValue) => {
                const modifiedCurrentValue = currValue.title.replace(' ', '').toLowerCase();

                return modifiedCurrentValue.includes(currentSearchBarValue.toLowerCase()
                .replace(' ', ''));
            });

            setSuggestedResults([...MatchingElements, ...MatchingElementsAlgo].slice(0, 3));
            if ([...MatchingElements, ...MatchingElementsAlgo][0] != null && 
                [...MatchingElements, ...MatchingElementsAlgo][0] != undefined) 
            {
                setAreSuggestedResultsShown(true);
            }
            else {
                setAreSuggestedResultsShown(false);
            }
        }
    }, [currentSearchBarValue]);

    const clearSearchBarHandler = () => {
        searchBarInput.current.value = '';
        dispatch(SearchBarActions.changeSearchValue(''));
    };

    return (
        <InputGroup className={styles[props.searchBarClass]} style={{position: 'relative'}}>
            <FormControl
                className={`${styles.SearchBar} ${styles[props.searchBarClassExtended]}`}
                placeholder="Browse Content..."
                aria-label="Browse Content..."
                aria-describedby="search-addon"
                onKeyUp={updateSearchValue}
                ref={searchBarInput}
            />
            <InputGroup.Text 
                className={`${styles.addon} ${styles[props.searchBarClassExtended]}`} 
                id="search-addon"
            >
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            {currentSearchBarValue != '' && <div className={styles.searchResults}>
                {!areSuggestedResultsShown && currentSearchBarValue != '' ? 
                    <div className={styles.nothingFound}>
                        <i className="fa-solid fa-face-sad-tear"></i>
                        <h6>Sorry, Nothing Found</h6>
                    </div> 
                    : // break (this up or this down)
                    suggestedResults.map(suggestedResult => {
                        if (suggestedResult.type == 'DataStructure') {
                            return <SearchBarResult key={suggestedResult.id}
                                title={suggestedResult.title}
                                access={suggestedResult.accessComplexity}
                                search={suggestedResult.searchComplexity}
                                insertion={suggestedResult.insertionComplexity}
                                deletion={suggestedResult.deletionComplexity}
                                clearInput={clearSearchBarHandler}
                            />
                        }
                        else {
                            return <SearchBarResultAlgo key={suggestedResult.id}
                                title={suggestedResult.title}
                                time={suggestedResult.timeComplexity}
                                space={suggestedResult.spaceComplexity}
                                clearInput={clearSearchBarHandler}
                            />
                        }
                    })
                }
            </div>}
        </InputGroup>
    );
}

export default SearchBar;