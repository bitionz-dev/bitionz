import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from "./NFTilter.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";
import {useTranslation} from "react-i18next";

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

const names = [
    'Yes',
    'No',
];

export default function NFTFilter() {
    const [NFT, setNFT] = React.useState([]);
    const {filters: {setNft}} = useContext(LayoutContext)
    const {t} = useTranslation();
    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setNFT(typeof value === 'string' ? value.split(',') : value,);
        setNft(value === "Yes")
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 250}} size={"small"}>
                <InputLabel id="demo-multiple-checkbox-label">NFT</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={NFT}
                    onChange={handleChange}
                    input={<OutlinedInput label="NFT"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className={styles.filterContainer}
                >
                    {names.map((name) => (
                        <MenuItem key={t(name)} value={name}>
                            <Checkbox checked={NFT.indexOf(name) > -1}/>
                            <ListItemText primary={t(name)}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
