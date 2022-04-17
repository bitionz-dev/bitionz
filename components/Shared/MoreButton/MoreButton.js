import {Button} from "@mui/material";
import styles from "./MoreButton.module.css"
import {useTranslation} from "react-i18next";

export default function MoreButton({setMore}) {
    const {t} = useTranslation();
    return (
        <Button variant="contained" className={`${styles.moreButton}`} onClick={() => setMore(true)}>{t("Discover more")}</Button>)
}