import {Button} from "@mui/material";
import styles from "./SendButton.module.css"
import {useTranslation} from "react-i18next";

export default function SendButton() {
    const {t} = useTranslation();
    return (
        <Button type={"submit"} variant="contained" className={`${styles.moreButton}`}>{t("Send")}</Button>)
}