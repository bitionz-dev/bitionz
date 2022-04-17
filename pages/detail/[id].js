import {useRouter} from "next/router";
import LargeImage from "../../components/Shared/LargeImage/LargeImage";
import styles from '../../styles/Detail.module.css'
import useSWR from "swr";
import Info from "../../components/Info/Info";
import {Skeleton} from "@mui/material";
import Suggestions from "../../components/SuggestedCarrousel/Suggestions";
import {useMediaQuery} from "react-responsive";
import {useContext} from "react";
import {LayoutContext} from "../../components/Tools/Context/Context";
import Error from "../../components/Shared/Error/Error";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Detail() {
    const {lang} = useContext(LayoutContext);
    const router = useRouter()
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const {id, source} = router.query
    let detail
    let errorInPage
    if (source === 'suggested') {
        const {data, error} = useSWR(`/api/suggested?lang=${lang}`, fetcher)
        detail = data?.filter((token) => token.id.toString() === id)[0]
        errorInPage = error
    } else {
        const {data, error} = useSWR(`/api/detail?id=${id}&lang=${lang}`, fetcher)
        detail = data && data[0]
        errorInPage = error
    }
    if (errorInPage) return <Error/>

    if (!detail) {
        return (
            <Skeleton variant="rectangular">
                <div className={styles.container}>
                    <LargeImage imgURL={detail?.logo} altText={"image of the searched token"}
                                suggested={source === 'suggested'}/>
                    <Info
                        category={detail?.category}
                        name={detail?.name}
                        description={detail?.description}
                        technicalDoc={detail?.urls?.technical_doc}
                        webUrl={detail?.urls?.website}
                        chat={detail?.urls?.chat}
                        twitter={detail?.urls?.twitter}
                        sourceCode={detail?.urls?.source_code}
                        reddit={detail?.urls?.reddit}
                    />
                </div>
            </Skeleton>
        )
    }
    return (
        <>
            <div className={styles.padding}>
                <div className={styles.container}>
                    <LargeImage imgURL={detail?.logo} altText={"image of the searched token"}
                                suggested={source === 'suggested'}/>
                    <Info
                        category={detail?.category}
                        name={detail?.name}
                        description={detail?.description}
                        technicalDoc={detail?.urls?.technical_doc}
                        webUrl={detail?.urls?.website}
                        chat={detail?.urls?.chat}
                        twitter={detail?.urls?.twitter}
                        sourceCode={detail?.urls?.source_code}
                        reddit={detail?.urls?.reddit}
                    />
                </div>
                {isDesktopOrLaptop && <Suggestions/>}
            </div>
            {!isDesktopOrLaptop && <Suggestions/>}
        </>
    )
}