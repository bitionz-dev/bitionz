import Head from "next/head";
import Script from "next/script";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {useContext} from "react";
import {LayoutContext} from "../Context/Context";


export default function Page({title, meta, bootstrap, email = true}) {
    const {lang} = useContext(LayoutContext);
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                es: {
                    translation: {
                        "Search metaverse...": "Busca tu metaverso...",
                        "Filters": "Filtros",
                        "Promote metaverse": "Promocionar metaverso",
                        "Suggestions": "Sugerencias",
                        "Most populars": "Populares",
                        "About us": "Nosotros",
                        "Technical document": "Documento técnico",
                        "Go to the website": "ir al sitio web",
                        "You might be interested...": "Te podría interesar...",
                        "Promote your metaverse": "Promociona tu metaverso",
                        "Consult for a customized plan": "Consultar por un plan a medida",
                        "Complete the form and we will contact you as soon as possible": "Completa el formulario y a la brevedad te contactaremos",
                        "Metaverse name": "Nombre del metaverso",
                        "Web address": "Dirección web",
                        "Phone number": "Número de teléfono",
                        "Message": "Mensaje",
                        "Send": "Enviar",
                        "We are a software company, specialized in blockchain technology": "Somos una empresa de software, especializada en tecnologia blockchain",
                        "Our company is mainly a seeker of metaverses, concentrates the information about them, for its design, setting and functionalities, we are talking about a metaverse of metaverses, with portals that transport us to where we want. It is an access point to the entire existing metaversal network and that expands more every day. We offer services for all those who wish to enter the world of metaverses, blockchain and NFT'S. Having various exclusive functions for companies and private users.": "Nuestra compañia es principalmente un buscador de metaversos, concentra la  información de los mismos, por su diseño, ambientación y funcionalidades\n" +
                            ", estamos hablando de un metaverso de metaversos, con portales que nos \n" +
                            "transportan a donde deseemos. Es un punto de acceso hacia toda la red \n" +
                            "metaversal existente y que cada día se expande más. \n" +
                            "Ofrecemos servicios para todos aquellos que desean incursionar en el mundo de los metaversos, blockchain y nft´s. Teniendo diversas funciones \n" +
                            "exclusivas para empresas y usuarios particulares.",
                        "Discover more": "Descubrir más",
                        "No results found": "No hay coincidencias con tú búsqueda",
                        "Try another term": "Prueba con otro término",
                        "Something went wrong": "Algo salió mal",
                        "Try again later while we fix the issue": "Puedes volver a intentar mientras trabajamos para solucionarlo",
                        "Apply": "Aplicar",
                        "Metaverse types": "Tipos de meta",
                        "Augmented reality": "Realidad aumentada",
                        "Enterprise": "Empresarial",
                        "Entertainment": "Entretenimiento",
                        "Payments": "Pagos",
                        "Yes": "Si"
                    }
                }
            },
            lng: lang,
            fallbackLng: "en",

            interpolation: {
                escapeValue: false
            }
        });
    return (
        <>
            <Head>
                <title>Findverse</title>
                <meta name="Findverse" content="Findverse is a metaverse tokens search engine"/>
                {bootstrap && <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />}
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {bootstrap && <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></Script>}

            {bootstrap &&
                <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></Script>}

            {bootstrap &&
                <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></Script>}
            {email && <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-TXK9TGRKPG"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TXK9TGRKPG');
        `}
            </Script>
        </>
    )

}