import styles from './SubHeader.module.css';
import { useNavigate } from 'react-router-dom';

function SubHeader(props) {
  const navigateTo = useNavigate();
  
  const ComparisonRedirect = () => {
      navigateTo(`/comparison`);
  };

  const DataStructuresRedirect = () => {
      navigateTo(`/home`);
      setTimeout(() => {
          window.location.href = "#";
          window.location.href = "#DataStructures";
      }, 100);
  };

  const AlgorithmsRedirect = () => {
      navigateTo(`/home`);
      setTimeout(() => {
          window.location.href = "#";
          window.location.href = "#Algorithms";
      }, 100);
  };

  const HomeRedirect = () => {
      navigateTo(`/home`);
  };


  return (
    <div className={`
        ${styles.subHeader} 
        ${props.isLandingScreenActive && styles.activeLandingScreen} 
        ${props.isVisible && styles.shown}`
    }>
        <h3 className={styles.short} onClick={HomeRedirect}>
          <i className="bi bi-code-slash"></i> All
        </h3>
        <h3 onClick={DataStructuresRedirect}>
          <i className="bi bi-stack"></i> Data Structures
        </h3>
        <h3 className={styles.short} onClick={AlgorithmsRedirect}>
          <i className="bi bi-gear-wide-connected"></i> Algorithms
        </h3>
        <h3 onClick={ComparisonRedirect}>
          <i className="fa-solid fa-scale-balanced"></i> Compare Solutions
        </h3>
    </div>
  );
}

export default SubHeader;