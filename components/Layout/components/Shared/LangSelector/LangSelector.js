import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useContext} from "react";
import {LayoutContext} from "../../../../Tools/Context/Context";
import styles from "./LangSelector.module.css";
import {useMediaQuery} from "react-responsive";

export default function LangSelector() {
    const {setLang, lang} = useContext(LayoutContext);
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <Select
                    labelId="langSelector"
                    id="lang-selector"
                    defaultValue={lang}
                    onChange={handleChange}
                    className={styles.input}
                >
                    <MenuItem value={"es"}>{isDesktopOrLaptop ? "ES" : "Español"}</MenuItem>
                    <MenuItem value={"en"}>{isDesktopOrLaptop ? "EN" : "English"}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}