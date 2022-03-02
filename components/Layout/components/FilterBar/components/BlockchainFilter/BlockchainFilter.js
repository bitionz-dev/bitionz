import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from "./BlockchainFilter.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const supportedBlockchains = [
    {
        name: "Ethereum",
        value: "ethereum",
    },
    {
        name: "Solana",
        value: "solana",
    },
    {
        name: "Binance Smart Chain",
        value: "bnb",
    },
    {
        name: "Avalanche",
        value: "avalanche",
    },
    {
        name: "Wanchain",
        value: "wanchain",
    },
    {
        name: "Polygon",
        value: "polygon",
    },
    {
        name: "Tron",
        value: "tron",
    },
    {
        name: "Fantom",
        value: "fantom",
    },
    {
        name: "Harmony",
        value: "harmony",
    },

];

export default function BlockchainFilter() {
    const {filters: {setBlockchains, blockchains}} = useContext(LayoutContext)

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setBlockchains(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 250}} size={"small"}>
                <InputLabel id="blockchain" className={styles.inputLabel}>Blockchain</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="blockchain"
                    multiple
                    value={blockchains}
                    onChange={handleChange}
                    input={<OutlinedInput label="Blockchain"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className={styles.filterContainer}
                >
                    {supportedBlockchains.map((blockchain) => (
                        <MenuItem key={blockchain.name} value={blockchain.value}>
                            <Checkbox checked={blockchains.indexOf(blockchain.value) > -1}/>
                            <ListItemText primary={blockchain.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
