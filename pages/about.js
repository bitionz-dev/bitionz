import Page from "../components/Tools/Page/Page";
import AboutBanner from "../components/Shared/AboutBanner/AboutBanner";
import styles from "../styles/About.module.css"
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {LayoutContext} from "../components/Tools/Context/Context";


export default function About() {
    const page = {
        name: "Bitionz | About",
        meta: {
            name: "bitionz about",
            description: "about section of bitionz"
        },
        bootstrap: true,
        email: false
    }
    const {t} = useTranslation();
    const {lang} = useContext(LayoutContext);
    return (
        <div className={styles.padding}>
            <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
            <AboutBanner/>
            <div className={styles.content}>
                <h3 className={styles.title}>{t("We are a software company, specialized in blockchain technology")}</h3>
                {lang === "en" && <p>Our company is mainly a seeker of metaverses, concentrates the information about them, for its design, setting and functionalities, we are talking about a metaverse of metaverses, with portals that transport us to where we want. It is an access point to the entire existing metaversal network and that expands more every day.\n" +
                    "We offer services for all those who wish to enter the world of metaverses, blockchain and NFT'S. Having various exclusive functions for companies and private users.</p>}
                {lang === "es" && <p>Nuestra compañia es principalmente un buscador de metaversos, concentra la  información de los mismos, por su diseño, ambientación y funcionalidades
                    , estamos hablando de un metaverso de metaversos, con portales que nos
                    transportan a donde deseemos. Es un punto de acceso hacia toda la red
                    metaversal existente y que cada día se expande más.
                    Ofrecemos servicios para todos aquellos que desean incursionar en el mundo de los metaversos, blockchain y nft´s. Teniendo diversas funciones
                    exclusivas para empresas y usuarios particulares.</p>}
            </div>
        </div>
    )


}