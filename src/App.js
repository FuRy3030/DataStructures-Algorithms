import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import LandingScreen from './pages-parts/landing-screen/LandingScreen';
import Header from '../src/components/header/Header';
import SubHeader from './components/sub-header/SubHeader';
import Footer from './components/footer/Footer';
import DataStructuresAndAlgorythyms from './pages-parts/data-struct-and-algo/DataStructuresAndAlgorythyms';
import DataStructureDetails from './pages/data-structure-details';
import UniversalTreePage from './pages/data-structure-tree';
import AVLTreePage from './pages/data-structure-avl-tree';
import ComparisonPage from './pages/Comparison';
import Algorithm from './pages/Algorithm';
import { Fragment } from 'react';
import PagesDataStructures from './pages/pages-data/pages-data';
import { BinarySearchTree, AVLTree, BTree, Algorithms } from './pages/pages-data/pages-data';

function App() {

  const [ isIntersecting, setIsIntersecting ] = useState(true);
  const [ hasSubHeaderActiveClass, setSubHeaderActiveClass] = useState(false);
  const currentLocation = useLocation();

  const updateHeaderStyle = (isCurrentlyIntersecting) => {
    setIsIntersecting(isCurrentlyIntersecting);
  }

  const setSubHeaderVisibilityState = (isSubHeaderVisible) => {
    setSubHeaderActiveClass(isSubHeaderVisible);
  };

  useEffect(() => {
    if (currentLocation.pathname != '/' && currentLocation.pathname != '/home') {
      setIsIntersecting(false);
    }
  }, [currentLocation]);

  return (
    <Fragment>
      <Header isLandingScreenActive={isIntersecting} updateSubHeaderClass={setSubHeaderVisibilityState}/>
      <SubHeader isLandingScreenActive={isIntersecting} isVisible={hasSubHeaderActiveClass}/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />  
        <Route path='/home' element={
          <Fragment> 
            <LandingScreen onChangeHeaderClass={updateHeaderStyle}/>
            <DataStructuresAndAlgorythyms />
          </Fragment> }
        />
        {PagesDataStructures.map(pageData => {
          return <Route path={`/datastructures/${pageData.urlPath.toLowerCase().replace(' ', '_')}`} 
            element={<DataStructureDetails key={pageData.name} dataStructureData={pageData} />} 
          />
        })}
        <Route path={`/datastructures/${BinarySearchTree.urlPath.toLowerCase().replace(' ', '_')}`} 
          element={<UniversalTreePage dataStructureData={BinarySearchTree}/>}
        />
        <Route path={`/datastructures/${AVLTree.urlPath.toLowerCase().replace(' ', '_')}`} 
          element={<AVLTreePage dataStructureData={AVLTree}/>}
        />
        <Route path={`/datastructures/${BTree.urlPath.toLowerCase().replace(' ', '_')}`} 
          element={<UniversalTreePage dataStructureData={BTree}/>}
        />
        <Route path={`/comparison`} element={<ComparisonPage data={PagesDataStructures}/>}
        />
        {Algorithms.map(algorithm => {
          return <Route path={`/algorithms/${algorithm.urlPath.toLowerCase().replace(' ', '_')}`} 
            element={<Algorithm key={algorithm.name} algorithmData={algorithm}/>} 
          />
        })}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
