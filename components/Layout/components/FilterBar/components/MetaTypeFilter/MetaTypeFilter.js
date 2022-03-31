import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from "./MetaTypeFilter.module.css"
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

const supportedTypes = [
    {
        name: "Gaming",
        value: "gaming",
    },
    {
        name: "Play to Earn",
        value: "play-to-earn",
    },
    {
        name: "Realidad aumentada",
        value: "vr-ar",
    },
    {
        name: "Empresarial",
        value: "enterprise-solutions",
    },
    {
        name: "Media",
        value: "media",
    },
    {
        name: "Entretenimiento",
        value: "entertainment",
    },
    {
        name: "DAO",
        value: "dao",
    },
    {
        name: "Pagos",
        value: "payments",
    },
    {
        name: "Yield",
        value: "yield-farming",
    },

];

export default function MetaTypeFilter() {
    const {filters: {setTypes, types}} = useContext(LayoutContext)

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setTypes(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 250}} size={"small"}>
                <InputLabel id="demo-multiple-checkbox-label">Tipos de meta</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={types}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tipos de meta"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className={styles.filterContainer}
                >
                    {supportedTypes.map((type) => (
                        <MenuItem key={type.name} value={type.value}>
                            <Checkbox checked={types.indexOf(type.value) > -1}/>
                            <ListItemText primary={type.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
