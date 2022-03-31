export async function loadDetail(tokensID) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("X-CMC_PRO_API_KEY", process.env.SK);

        const requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        const response = await fetch(`${process.env.SU}/v2/cryptocurrency/info?id=${tokensID}`, requestOptions)
        return await response.json()
    } catch (err) {
        return err
    }
}