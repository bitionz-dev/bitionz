// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import {supabase} from "../../api";
import translate from 'node-google-translate-skidz'

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
        translate({
            text: req.query.id,
            source: 'es',
            target: 'en'
        }, function (result) {
            res.status(200).json(result.translation)
        });
    } catch (err) {
        return req.query.id
    }
}