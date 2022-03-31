import * as React from "react";
import styles from '../Footer.module.css'


export default function Login() {
    return (<div className={styles.login}>
        <a href={"#"}>Iniciar Sesión</a>
        <p>/</p>
        <a href={"#"}>Registrarse</a>
    </div>);
}