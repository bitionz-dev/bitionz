import * as React from 'react';
import {useContext} from "react";
import {LayoutContext} from "../../../../Tools/Context/Context";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {Badge} from "@mui/material";

export default function FilterIcon({className}) {
    const {showFilters, setShowFilters} = useContext(LayoutContext);
    return (
        <FilterAltIcon styles={{color: "white"}} className={className}
                       onClick={() => setShowFilters(!showFilters)}/>)
}