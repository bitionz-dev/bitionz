// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';

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
    console.log(req.query.id)
    try {
        const myHeaders = new Headers();
        myHeaders.append("X-CMC_PRO_API_KEY", process.env.SK);

        const requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        fetch(`${process.env.SU}/v2/cryptocurrency/info?id=${req.query.id}`, requestOptions).then(response => response.text())
            .then(result => res.status(200).json(result))
    } catch (err) {
        return err
    }
}
