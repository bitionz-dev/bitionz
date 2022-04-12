import * as React from 'react';
import Speaker from "../Icons/Speaker";
import styles from './PromoteBanner.module.css'

export default function PromoteBanner() {
    return (<div className={styles.container}>
        <Speaker className={styles.icon}/>
        <h2 className={styles.title}>Promote your metaverse</h2>
    </div>)
}