// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import translate from "node-google-translate-skidz";

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
});


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async (req, res) => {
    await runMiddleware(req, res, cors);
    try {
        const myHeaders = new Headers();
        myHeaders.append("X-CMC_PRO_API_KEY", process.env.SK);

        const requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };
        const lang = req?.query?.lang
        const {data} = await fetch(`${process.env.SU}/v2/cryptocurrency/info?id=${req.query.id}`, requestOptions).then(response => response.json())
        const detailData = Object.values(data)
        let translatedData = []
        if (lang !== "en") {
            for (const token of detailData) {
                const {translation} = await translateString(token.description)
                token.description = translation
                translatedData.push(token)
            }
        } else {
            translatedData = detailData
        }
        return res.status(200).json(translatedData)
    } catch (err) {
        return err
    }
}


const translateString = async (string) => {
    return await translate({
        text: string, source: 'en', target: 'es'
    }, function (result) {
        return result.translation.translation
    })
}
