import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useContext} from "react";
import {LayoutContext} from "../../../../Tools/Context/Context";

export default function LangSelector() {
    const {setLang} = useContext(LayoutContext);

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="lang-selector-label">Lang</InputLabel>
                <Select
                    labelId="langSelector"
                    id="lang-selector"
                    defaultValue={"en"}
                    onChange={handleChange}
                >
                    <MenuItem value={"es"}>ES</MenuItem>
                    <MenuItem value={"en"}>EN</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}