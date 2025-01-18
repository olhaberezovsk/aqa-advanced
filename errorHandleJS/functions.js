const axios = require('axios');

async function invalidUrlTracing() {
    try {
        await axios.get('/404');
        return 'Success!'
    } catch (error) {
        return 'Invalid URL was used!';
    } 
}

async function headersTracing() {
    const config = {
        header: {
            'Authorization' : 'Bearer token',
            'Custom-Header' : 'Test Header'
        },
        params: {
            key1 : 'value1',
            key2 : 'value2'
        }
    };
    return await axios.get('https://jsonplaceholder.typicode.com')
}

async function dataTracing(paramURL) {
    try {
        const response = await axios.get(paramURL);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

module.exports = {invalidUrlTracing, headersTracing, dataTracing};