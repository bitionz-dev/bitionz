import {Button} from "@mui/material";
import styles from "./PromoteButton.module.css"
import classNames from "classnames"

export default function PromoteButton({className}) {
    return (
        <Button variant="outlined" className={`${className} ${styles.promoteButton}`}>Promocionar metaverso</Button>)
}