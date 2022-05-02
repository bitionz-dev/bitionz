import Button from '@mui/material/Button';
import styles from "./ApplyButton.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";
import {useTranslation} from "react-i18next";


export default function ApplyButton() {
    const {t} = useTranslation();
    const {filters, setFilteredTokens, tokens} = useContext(LayoutContext)
    let byBlockchains = []
    let byNFT = []
    let byType = []
    const applyFilters = (tokens) => {
        if (filters.blockchains.length > 0) {
            tokens.map(token => {
                if (token.platform) {
                    let slug = token.platform.slug
                    if (filters.blockchains.indexOf(slug) + 1) {
                        byBlockchains.push(token)
                    }
                }
            })
        } else {
            byBlockchains = tokens
        }
        if (filters.nft) {
            byBlockchains.filter(token => {
                token.tags.map(tag => {
                    if (tag === 'collectibles-nfts') {
                        byNFT.push(token)
                    }
                });
            })
        } else {
            byNFT = byBlockchains
        }
        if (filters.types.length > 0) {
            byNFT.filter(token => {
                token.tags.map(tag => {
                    if (filters.types.indexOf(tag) + 1) {
                        byType.push(token)
                    }
                });
            })
        } else {
            byType = byNFT
        }
        setFilteredTokens(byType)
    }
    return (<Button variant="contained" className={styles.applyButton}
                    onClick={() => applyFilters(JSON.parse(JSON.stringify(tokens)))}>{t("Apply")}</Button>)
}

