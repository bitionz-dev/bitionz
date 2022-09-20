import * as React from "react";
import BitionzSvg from "./BitionzSvg";
import {useRouter} from 'next/router'
import styles from "./Logo.module.css"

const Logo = () => {
    const router = useRouter()
  return (
    <>
      <BitionzSvg className={styles.desktop} onClick={() => window.open(`https://bitionz.net/`)}/>
    </>
  );
};

export default Logo;
