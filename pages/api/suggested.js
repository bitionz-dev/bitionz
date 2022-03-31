// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import {supabase} from "../../api";

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
        const {data} = await supabase.from('customTokens').select();
        res.status(200).json(data)
    } catch (err) {
        return err
    }
}
