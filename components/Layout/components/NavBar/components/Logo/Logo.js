import * as React from "react"
import DesktopSvg from "./DesktopSvg";
import MobileSvg from "./MobileSvg";
import styles from "./Logo.module.css"
import {useRouter} from 'next/router'

const Logo = () => {
    const router = useRouter()
    return (
        <>
            <DesktopSvg className={styles.desktop} onClick={() => router.push(`/`)}/>
            <MobileSvg className={styles.mobile} onClick={() => router.push(`/`)}/>
        </>
    )
}

export default Logo