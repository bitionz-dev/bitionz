import * as React from 'react';
import styles from "./FilterBar.module.css"
import BlockchainFilter from "./components/BlockchainFilter/BlockchainFilter";
import NFTFilter from "./components/NFTFilter/NFTFilter";
import MetaTypeFilter from "./components/MetaTypeFilter/MetaTypeFilter"
import ApplyButton from "./components/ApplyButton/ApplyButton";

export default function FilterBar() {

    return (<div className={`tw-py-5 tw-container ${styles.lowerBar}`}>
        <div className={styles.filters}>
            <BlockchainFilter/>
            <NFTFilter/>
            <MetaTypeFilter/>
            <ApplyButton/>
        </div>
    </div>);
}