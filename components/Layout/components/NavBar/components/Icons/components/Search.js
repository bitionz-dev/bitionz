import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css"

export default function Search() {
    return <SearchIcon className={styles.search} onClick={() => (console.log())}/>
}