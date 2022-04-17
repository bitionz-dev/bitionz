import {Card, CardMedia} from "@mui/material";
import styles from "./Banner.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../Tools/Context/Context";


export default function Banner() {
    const {lang} = useContext(LayoutContext);
    return (
        <Card className={styles.bannerContainer}>
            <CardMedia className={styles.bannerImage} src={`banners/${lang}/banner.png`}
                       component="img"
                       image={`banners/${lang}/banner.png`}
                       alt="space themed illustration"/>
            <CardMedia className={styles.bannerImageMobile} src={`banners/${lang}/bannerMobile.png`}
                       component="img"
                       image={`banners/${lang}/bannerMobile.png`}
                       alt="space themed illustration"/>
        </Card>
    )
}