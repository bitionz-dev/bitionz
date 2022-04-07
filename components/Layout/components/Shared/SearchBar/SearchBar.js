import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css"
import {createFilterOptions, TextField} from "@mui/material";
import {useContext} from "react";
import {useRouter} from 'next/router'
import {LayoutContext} from "../../../../Tools/Context/Context";

const filterOptions = createFilterOptions({
    matchFrom: 'any', stringify: (option) => option.name,
});

export default function SearchBar({className, width}) {
    const router = useRouter()
    const {filteredTokens} = useContext(LayoutContext);
    return <Autocomplete
        id="input-search"
        size={"small"}
        className={`${styles.input} ${className}`}
        freeSolo
        forcePopupIcon
        popupIcon={<SearchIcon className={styles.icon}/>}
        getOptionLabel={(option) => option.name ? option.name : option}
        onChange={(e, value, reason, detail) => {
            console.log(value)
            if (reason === "selectOption") {
                router.push(`/detail/${value.id}`)
            } else if (reason === "createOption") {
                router.push(`/search/${value}`)
            }
        }}
        sx={{width: width}}
        renderInput={(params) => <TextField {...params} label="Buscá tu metaverso..."/>}
        filterOptions={filterOptions}
        options={filteredTokens}/>
}