import {useRouter} from "next/router";

export default function Search({setTokens}) {
    const router = useRouter()
    const { id } = router.query
    return (
        <p>{id}</p>
    )
}