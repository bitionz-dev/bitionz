import {Card, CardMedia} from "@mui/material";
import styles from "./LowerBanner.module.css"


export default function LowerBanner() {
    return (
        <Card className={styles.bannerContainer}>
            <CardMedia className={styles.bannerImage} src={"banners/lowerBanner.png"}
                       component="img"
                       image="banners/lowerBanner.png"
                       alt="Paella dish"/>
            <CardMedia className={styles.bannerImageMobile} src={"banners/lowerBannerMobile.png"}
                       component="img"
                       image="banners/lowerBannerMobile.png"
                       alt="Paella dish"/>
        </Card>
    )
}