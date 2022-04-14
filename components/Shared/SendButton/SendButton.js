import {Button} from "@mui/material";
import styles from "./SendButton.module.css"

export default function SendButton() {
    return (
        <Button type={"submit"} variant="contained" className={`${styles.moreButton}`}>Send</Button>)
}