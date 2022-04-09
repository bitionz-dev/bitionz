import * as React from 'react';
import styles from './Error.module.css'
import CloudOffTwoToneIcon from '@mui/icons-material/CloudOffTwoTone';

export default function Error() {
    return (<div className={styles.container}>
        <CloudOffTwoToneIcon className={styles.icon}/>
        <h2 className={styles.title}>Algo salió mal</h2>
        <p className={styles.description}>Puedes volver a intentar mientras trabajamos para solucionarlo</p>
    </div>)
}