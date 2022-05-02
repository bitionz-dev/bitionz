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
        name: "Augmented reality",
        value: "vr-ar",
    },
    {
        name: "Enterprise",
        value: "enterprise-solutions",
    },
    {
        name: "Media",
        value: "media",
    },
    {
        name: "Entertainment",
        value: "entertainment",
    },
    {
        name: "DAO",
        value: "dao",
    },
    {
        name: "Payments",
        value: "payments",
    },
    {
        name: "Yield",
        value: "yield-farming",
    },

];

export default function MetaTypeFilter() {
    const {filters: {setTypes, types}} = useContext(LayoutContext)
    const {t} = useTranslation();

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
                <InputLabel id="demo-multiple-checkbox-label">{t("Metaverse types")}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={types}
                    onChange={handleChange}
                    input={<OutlinedInput label={t("Metaverse types")}/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className={styles.filterContainer}
                >
                    {supportedTypes.map((type) => (
                        <MenuItem key={t(type.name)} value={type.value}>
                            <Checkbox checked={types.indexOf(type.value) > -1}/>
                            <ListItemText primary={t(type.name)}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
