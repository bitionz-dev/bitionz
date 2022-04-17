import * as React from "react";
import Link from 'next/link'
import {useTranslation} from "react-i18next";


export default function Promote() {
    const {t} = useTranslation();
    return (<div>
        <Link href="/promote">
            <a href={"#"}>{t("Promote metaverse")}</a>
        </Link>
    </div>);
}