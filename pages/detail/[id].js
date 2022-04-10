import {useRouter} from "next/router";
import LargeImage from "../../components/Shared/LargeImage/LargeImage";
import styles from '../../styles/Detail.module.css'
import useSWR from "swr";
import Info from "../../components/Info/Info";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Detail() {
    const router = useRouter()
    const {id, source} = router.query
    let detail
    if (source === 'suggested') {
        const {data, error} = useSWR(`/api/suggested`, fetcher)
        console.log(data)
        detail = data?.filter((token) => token.id.toString() === id)[0]
    } else {
        const {data, error} = useSWR(`/api/detail?id=${id}`, fetcher)
        detail = data
    }
    const {website, twitter, chat, reddit, technical_doc, source_code} = detail?.urls
    return (
        <div className={styles.container}>
            <LargeImage imgURL={detail?.logo} altText={"image of the searched token"}/>
            <Info
                category={detail?.category}
                name={detail?.name}
                description={detail?.description}
                technicalDoc={technical_doc}
                webUrl={website}
                chat={chat}
                twitter={twitter}
                sourceCode={source_code}
                reddit={reddit}
            />
        </div>
    )
}