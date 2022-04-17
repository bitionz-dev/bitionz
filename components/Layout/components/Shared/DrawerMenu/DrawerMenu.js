import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import buttonStyles from "./DrawerButtons.module.css";
import styles from "./DrawerMenu.module.css"
import CloseIcon from '@mui/icons-material/Close';
import {Divider, ListItemIcon} from "@mui/material";
import {useContext} from "react";
import {LayoutContext} from "../../../../Tools/Context/Context";
import {useRouter} from "next/router";
import LangSelector from "../LangSelector/LangSelector";
import {useTranslation} from "react-i18next";


export default function DrawerMenu() {
    const {setShowDrawerMenu} = useContext(LayoutContext);
    const {t} = useTranslation();
    const router = useRouter()
    return (<>
            <Drawer open={true} className={styles.drawer} onClose={() => setShowDrawerMenu(false)}>
                < div role={'presentation'}
                      onKeyDown={() => setShowDrawerMenu(false)}>
                    <List>
                        <ListItem button className={styles.iconContainer}>
                            <ListItemIcon className={styles.iconItem}>
                                <CloseIcon className={styles.backIcon} onClick={() => setShowDrawerMenu(false)}/>
                            </ListItemIcon>
                        </ListItem>
                        <div className={styles.buttons}>
                            <ListItem>
                                <Button onClick={() => {
                                    router.push('/promote')
                                    setShowDrawerMenu(false)
                                }} variant="text"
                                        className={buttonStyles.promoteButton}>{t("Promote metaverse")}</Button>
                            </ListItem>
                            <div className={styles.selector}>
                                <LangSelector/>
                            </div>
                        </div>
                    </List>
                </div>
            </Drawer>
        </>
    );
}