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
                <h3 className={styles.title}>We are a software company, specialized in blockchain technology</h3>
                <p>Our company is mainly a seeker of metaverses, concentrates the information about them, for its
                    design, setting and functionalities, we are talking about a metaverse of metaverses, with portals
                    that transport us to where we want. It is an access point to the entire existing metaversal network
                    and that expands more every day.
                    We offer services for all those who wish to enter the world of metaverses, blockchain and NFTS.
                    Having various exclusive functions for companies and private users.</p>
            </div>
        </div>
    )


}