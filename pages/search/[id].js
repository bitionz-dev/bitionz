import {useContext} from "react";
import {LayoutContext} from "../../components/Tools/Context/Context";
import SearchResults from "../../components/SearchResults/SearchResults";
import {useRouter} from "next/router";
import Page from "../../components/Tools/Page/Page";

export default function Search() {
    const page = {
        name: "Bitionz | Search",
        meta: {
            name: "bitionz search",
            description: "search section of bitionz"
        },
        bootstrap: true
    }
    const router = useRouter();
    const {id} = router.query
    const {filteredTokens} = useContext(LayoutContext);
    const searchResultTokens = filteredTokens.filter((token) => {
        if (token.name.toLowerCase().includes(id.toLowerCase())) return true
        const foundTag = token.tags.find(tag => tag.toLowerCase().includes(id.toLowerCase()))
        return foundTag !== undefined;

    })
    return (
        <>
            <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
            <SearchResults filteredTokens={searchResultTokens} id={id}/>
        </>
    )


}