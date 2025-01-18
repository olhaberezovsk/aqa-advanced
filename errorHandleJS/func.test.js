const axios = require('axios'); 
const {invalidUrlTracing, headersTracing, dataTracing} = require('./functions');

jest.mock('axios');

beforeEach(() => { 
    jest.resetAllMocks();
})

test('Error Handling', async () => {
    axios.get.mockRejectedValue(new Error('Error!'));
    const response = await invalidUrlTracing();
    expect(response).toBe('Invalid URL was used!');
});

test('Custom headers and values', async () => {
    const spyHeaders = jest.spyOn(axios, 'get');
    await headersTracing();
    expect(spyHeaders).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com'), {
    header: {
        'Authorization' : 'Bearer token',
        'Custom-Header' : 'Test Header'
    },
    params: {
        key1 : 'value1',
        key2 : 'value2'
    }
}
spyHeaders.mockRestore();
});

test('Return message about success', async () => {
    axios.get.mockResolvedValue({ data: { message: 'Success' } });

    const result = await dataTracing('https://example.com');
    expect(result).toEqual({ message: 'Success' });
});

test('Return message about fail', async () => {
    axios.get.mockRejectedValue(new Error('Error!'));

    const result = await dataTracing('https://example.com');
    expect(result).toBe('Error!');
});



