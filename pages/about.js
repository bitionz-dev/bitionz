import Page from "../components/Tools/Page/Page";
import AboutBanner from "../components/Shared/AboutBanner/AboutBanner";
import styles from "../styles/About.module.css"


export default function Promote() {
    const page = {
        name: "Bitionz | About",
        meta: {
            name: "bitionz about",
            description: "about section of bitionz"
        },
        bootstrap: true,
        email: false
    }
    return (
        <div className={styles.padding}>
            <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
            <AboutBanner/>
            <div className={styles.content}>
                <h3 className={styles.title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
    )


}