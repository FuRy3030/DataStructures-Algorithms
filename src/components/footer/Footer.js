import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <h4>Author: Adam Duda <i className="fa-solid fa-copyright"></i></h4>
        </div>
    )
}

export default Footer;