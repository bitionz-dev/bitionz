export async function loadTokens() {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", process.env.SK);

        const requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        const response = await fetch(`${process.env.SU}/list`, requestOptions)
        return await response.json()
    } catch (err) {
        return err
    }
}