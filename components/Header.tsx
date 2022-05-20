import styles from '../styles/Header.module.scss';
import Offers from './Offers';
import TopBar from './TopBar';
export default function Header(){
    return (

        <div className={styles.header}>
            <Offers ></Offers>
            <TopBar></TopBar>
           { /*<a href="/About">About</a><a href="/">index</a>*/}
        </div>
    )
}

