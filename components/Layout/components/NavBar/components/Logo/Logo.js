import * as React from "react"
import DesktopSvg from "./DesktopSvg";
import MobileSvg from "./MobileSvg";
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <>
            <DesktopSvg className={styles.desktop}/>
            <MobileSvg className={styles.mobile}/>
        </>
    )
}

export default Logo