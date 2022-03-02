import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from "./GameTypeFilter.module.css"

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
    'RPG',
    'Shooter',
    'MOBBA',
];

export default function GameTypeFilter() {
    const [typesOfGames, setTypesOfGames] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setTypesOfGames(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 250}} size={"small"}>
                <InputLabel id="demo-multiple-checkbox-label">Tipo de Juego</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={typesOfGames}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tipo de juego"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className={styles.filterContainer}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={typesOfGames.indexOf(name) > -1}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
