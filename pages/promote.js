import Page from "../components/Tools/Page/Page";
import PromoteBanner from "../components/Shared/PromoteBanner/PromoteBanner";
import styles from "../styles/Promote.module.css"
import Form from "../components/Shared/Form/Form";
import {useTranslation} from "react-i18next";


export default function Promote() {
    const page = {
        name: "Bitionz | Promote",
        meta: {
            name: "bitionz promote",
            description: "promote section of bitionz"
        },
        bootstrap: true,
        email: true
    }
    const {t} = useTranslation();
    return (
        <>
            <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
            <PromoteBanner/>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("Consult for a customized plan")}</h2>
                <p className={styles.description}>{t("Complete the form and we will contact you as soon as possible")}</p>
            </div>
            <Form/>
        </>
    )


}