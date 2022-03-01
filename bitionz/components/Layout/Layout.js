import NavBar from "./components/NavBar/NavBar";
import {LayoutContext} from "../Tools/Context/Context"
import {useState} from "react";

export default function Layout({children, tokens}) {
    const [showLowerNavBar, setShowLowerNavBar] = useState(false);
    return (
        <LayoutContext.Provider value={{
            setShowLowerNavBar: setShowLowerNavBar,
            showLowerNavBar: showLowerNavBar,
            tokens: tokens
        }}>
            <NavBar/>
            <main>{children}</main>
        </LayoutContext.Provider>
    )
}