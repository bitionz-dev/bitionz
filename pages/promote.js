import Page from "../components/Tools/Page/Page";
import PromoteBanner from "../components/Shared/PromoteBanner/PromoteBanner";
import styles from "../styles/Promote.module.css"
import Form from "../components/Shared/Form/Form";


export default function Promote() {
    const page = {
        name: "Bitionz | Promote",
        meta: {
            name: "bitionz promote",
            description: "promote section of bitionz"
        },
        bootstrap: true
    }
    return (
        <>
            <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
            <PromoteBanner/>
            <div className={styles.container}>
                <h2 className={styles.title}>Consult for a customized plan</h2>
                <p className={styles.description}>Complete the form and we will contact you as soon as possible</p>
            </div>
            <Form/>
        </>
    )


}