import {Button} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styles from "./FilterButton.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context"

export default function FilterButton({className}) {
    const {showDesktopLowerBar, setShowDesktopLowerBar} = useContext(LayoutContext);
    return <Button variant="outlined" className={`${styles.filterButton} ${className}`}
                   onClick={() => setShowDesktopLowerBar(!showDesktopLowerBar)}
                   startIcon={<FilterAltIcon/>}>Filtros</Button>
}