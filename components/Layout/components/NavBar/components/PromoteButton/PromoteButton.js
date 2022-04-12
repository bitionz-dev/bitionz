import {Button} from "@mui/material";
import styles from "./PromoteButton.module.css"
import classNames from "classnames"
import {useRouter} from "next/router";

export default function PromoteButton({className}) {
    const router = useRouter()
    return (
        <Button variant="contained" className={`${className} ${styles.promoteButton}`}
                onClick={() => router.push('/promote')}>Promocionar metaverso</Button>)
}