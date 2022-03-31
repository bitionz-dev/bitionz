import {Card, CardMedia} from "@mui/material";
import styles from "./Banner.module.css"


export default function Banner() {
    return (
        <Card className={styles.bannerContainer}>
            <CardMedia className={styles.bannerImage} src={"banners/banner.png"}
                       component="img"
                       image="banners/banner.png"
                       alt="space themed illustration"/>
            <CardMedia className={styles.bannerImageMobile} src={"banners/bannerMobile.png"}
                       component="img"
                       image="banners/bannerMobile.png"
                       alt="space themed illustration"/>
        </Card>
    )
}