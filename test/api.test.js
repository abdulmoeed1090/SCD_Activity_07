const request = require('supertest');
const app = require('../server');

describe('Backend API Tests', () => {
  test('GET /api/health returns 200', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('POST /api/add success', async () => {
    const res = await request(app).post('/api/add').send({ a: 2, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 5 });
  });

  test('POST /api/add fails on bad payload', async () => {
    const res = await request(app).post('/api/add').send({ a: 2, b: 'x' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid payload');
  });
});
