import PromoteBanner from "../components/Shared/PromoteBanner/PromoteBanner";
import styles from "../styles/Promote.module.css"
import Form from "../components/Shared/Form/Form";
import {useTranslation} from "react-i18next";


export default function Promote() {
    const {t} = useTranslation();
    return (
        <>
            <PromoteBanner/>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("Consult for a customized plan")}</h2>
                <p className={styles.description}>{t("Complete the form and we will contact you as soon as possible")}</p>
            </div>
            <Form/>
        </>
    )


}