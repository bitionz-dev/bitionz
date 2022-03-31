import * as React from "react";
import Promote from "./components/Promote";
import Login from './components/Login'
import Social from './components/Social'
import styles from "./Footer.module.css";


export default function Footer() {
    return (<div className={styles.container}>
        <Promote/>
        <Login/>
        <Social/>
    </div>)
}