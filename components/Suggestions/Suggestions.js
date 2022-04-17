import * as React from 'react';
import {useContext} from "react";
import {LayoutContext} from "../Tools/Context/Context";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import styles from "./Suggestions.module.css"
import 'pure-react-carousel/dist/react-carousel.es.css';
import FullCard from "../Shared/FullCard/FullCard";
import useSWR from 'swr'
import {useMediaQuery} from "react-responsive";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Suggestions() {
    const router = useRouter()
    const {t} = useTranslation();
    const isDesktopOrLaptop = useMediaQuery({minWidth: 768})
    const {filteredTokens, lang} = useContext(LayoutContext);
    const suggestedTokens = filteredTokens.slice(0, 8)
    const requiredTokens = []
    suggestedTokens.forEach((token) => requiredTokens.push(token.id))
    const {data, error} = useSWR(`/api/suggested?lang=${lang}`, fetcher)
    if (error) return <></>
    if (!data) return <CircularProgress className={styles.circular}/>
    if (data.length === 0) return <></>

    data?.sort((a, b) => {
        if (a.id < b.id) {
            return -1
        } else {
            return 1
        }
    })
    const slides = []
    if (data?.length > 0) {
        if (isDesktopOrLaptop) {
            slides.push(data.slice(0, 4))
            if (data.length > 4) {
                slides.push(data.slice(4, 8))
            }
        } else {
            data.forEach((detail) => slides.push(detail))
        }
    }
    return (<div className={styles.carousel}>
        <h2 className={styles.title}>{t("Suggestions")}</h2>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={slides.length}
        >
            {isDesktopOrLaptop && <Slider>
                {slides?.map((slide, index) => {
                    return (<Slide className={styles.slide}>
                        <ButtonBack
                            className={index > 0 ? styles.button : styles.buttonDisabled}><ArrowBackIosIcon/></ButtonBack>
                        {Array.isArray(slide) && slide.map((token) => {
                            return (<FullCard title={token.name} text={token.description.split(".")[0]}
                                              imgURL={token.logo}
                                              onClick={() => router.push(`/detail/${token.id}?source=suggested`)}/>)
                        })}
                        {!Array.isArray(slide) && <FullCard title={slide.name} text={slide.description}
                                                            imgURL={slide.logo}
                                                            onClick={() => router.push(`/detail/${token.id}?source=suggested`)}/>}
                        <ButtonNext
                            className={index < slides.length - 1 ? styles.button : styles.buttonDisabled}><ArrowForwardIosIcon/></ButtonNext>
                    </Slide>)
                })}
            </Slider>}

            {!isDesktopOrLaptop && <Slider>

                {slides?.map((slide, index) => {
                    return (
                        <Slide className={styles.slide}
                               onClick={() => router.push(`/detail/${slide.id}?source=suggested`)}
                               onTouchStart={() => () => router.push(`/detail/${slide.id}?source=suggested`)}>
                            <ButtonBack className={styles.button}><ArrowBackIosIcon/></ButtonBack>
                            {!Array.isArray(slide) &&
                                <FullCard title={slide.name} text={slide.description.split(".")[0]}
                                          imgURL={slide.logo}/>}
                            <ButtonNext
                                className={index < slides.length - 1 ? styles.button : styles.buttonDisabled}><ArrowForwardIosIcon/></ButtonNext>
                        </Slide>
                    )
                })}
            </Slider>}
        </CarouselProvider>
    </div>);
}

