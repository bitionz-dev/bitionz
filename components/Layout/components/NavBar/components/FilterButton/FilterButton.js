import {Button} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styles from "./FilterButton.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context"

export default function FilterButton({className}) {
    const {showFilters, setShowFilters} = useContext(LayoutContext);
    return <Button variant="outlined" className={`${styles.filterButton} ${className}`}
                   onClick={() => setShowFilters(!showFilters)}
                   startIcon={<FilterAltIcon/>}>Filtros</Button>
}