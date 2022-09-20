import * as React from "react";
import Promote from "./components/Promote";
import Social from './components/Social'
import styles from "./Footer.module.css";
import {useRouter} from "next/router";


export default function Footer() {
    const router = useRouter()
    return (<div className={styles.container}>
        <Promote/>
        <Social/>
    </div>)
}