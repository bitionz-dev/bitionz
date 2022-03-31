import {Button} from "@mui/material";
import styles from "./MoreButton.module.css"

export default function MoreButton({setMore}) {
    return (
        <Button variant="contained" className={`${styles.moreButton}`} onClick={() => setMore(true)}>Descubrir
            más</Button>)
}