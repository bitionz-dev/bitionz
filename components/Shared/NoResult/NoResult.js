import * as React from 'react';
import Search from "../Icons/Search";
import styles from './NoResult.module.css'

export default function NoResult() {
    return (<div className={styles.container}>
        <Search className={styles.icon}/>
        <h2 className={styles.title}>No hay coincidencias con tu búsqueda</h2>
        <p className={styles.description}>Prueba con otro término.</p>
    </div>)
}