import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css"
import {createFilterOptions, TextField} from "@mui/material";
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";

const filterOptions = createFilterOptions({
    matchFrom: 'any', stringify: (option) => option.name,
});

export default function SearchBar({className}) {
    const {tokens} = useContext(LayoutContext);
    console.log(tokens)
    return <Autocomplete
        id="input-search"
        size={"small"}
        className={`${styles.input} ${className}`}
        popupIcon={<SearchIcon className={styles.icon}/>}
        getOptionLabel={(option) => option.name}
        onChange={(e) => console.log(e.target)}
        sx={{width: 700}}
        renderInput={(params) => <TextField {...params} label="Buscá tu metaverso..."/>}
        filterOptions={filterOptions}
        options={tokens}/>
}