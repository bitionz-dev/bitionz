// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import {supabase} from "../../api";
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
        const lang = req?.query?.lang
        const {data} = await supabase.from('customTokens').select();
        let translatedData = []
        if (lang !== "en") {
            for (const token of data) {
                console.log(token)
                let trans = await translateString(token.smallDesc)
                token.smallDesc = trans.translation
                const {translation} = await translateString(token.description)
                token.description = translation
                translatedData.push(token)
            }
        } else {
            translatedData = data
        }
        res.status(200).json(translatedData)
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
