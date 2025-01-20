const axios = require('axios');
// const { describe } = require('node:test');
// const { execPath } = require('process');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', 
    timeout: 5000,
});

describe('API Testing', () => {
    test('GET users list', async () => {
        const response = await api.get('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('GET posts list', async () => {
        const response = await api.get('/posts');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('GET comments list', async () => {
        const response = await api.get('/comments');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('POST new user', async () => {
        const personNew = {id: 11, name: 'Olha', username: 'olha1312', email: 'test@mail.com'};
        const response = await api.post('/users', personNew);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(personNew);
        expect(response.data).toHaveProperty('id');
    });

    test('POST new comment', async () => {
        const commentNew = {postId: 100, id: 501, name: 'Olha', email: 'test@mail.com', body: 'test'}
        const response = await api.post('/comments', commentNew);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(commentNew);
        expect(response.data).toHaveProperty('postId');
    });
})