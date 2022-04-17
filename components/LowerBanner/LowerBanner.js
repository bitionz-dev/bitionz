import {Card, CardMedia} from "@mui/material";
import styles from "./LowerBanner.module.css"
import {useContext} from "react";
import {LayoutContext} from "../Tools/Context/Context";


export default function LowerBanner() {
    const {lang} = useContext(LayoutContext);
    return (
        <Card className={styles.bannerContainer}>
            <CardMedia className={styles.bannerImage} src={`banners/${lang}/lowerBanner.png`}
                       component="img"
                       image={`banners/${lang}/lowerBanner.png`}
                       alt="Paella dish"/>
            <CardMedia className={styles.bannerImageMobile} src={`banners/${lang}/lowerBannerMobile.png`}
                       component="img"
                       image={`banners/${lang}/lowerBannerMobile.png`}
                       alt="Paella dish"/>
        </Card>
    )
}