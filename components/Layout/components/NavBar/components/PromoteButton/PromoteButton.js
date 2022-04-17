import {Button} from "@mui/material";
import styles from "./PromoteButton.module.css"
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

export default function PromoteButton({className}) {
    const {t} = useTranslation();
    const router = useRouter()
    return (
        <Button variant="contained" className={`${className} ${styles.promoteButton}`}
                onClick={() => router.push('/promote')}>{t("Promote metaverse")}</Button>)
}