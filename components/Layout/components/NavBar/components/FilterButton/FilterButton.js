import {Button} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styles from "./FilterButton.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context"
import {useTranslation} from "react-i18next";

export default function FilterButton({className}) {
    const {t} = useTranslation();
    const {showFilters, setShowFilters} = useContext(LayoutContext);
    return <Button variant="outlined" className={`${styles.filterButton} ${className}`}
                   onClick={() => setShowFilters(!showFilters)}
                   startIcon={<FilterAltIcon/>}>{t("Filters")}</Button>
}