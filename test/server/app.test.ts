import supertest from 'supertest';

describe('Express JS', () => {
  test('GET /', async () => {
    const parseServerState = (globalThis as any).parseServerState;
    return supertest(parseServerState.app).get('/').send().expect(200);
  });

  test('GET /parse/health', async () => {
    const parseServerState = (globalThis as any).parseServerState;
    return supertest(parseServerState.app).get('/parse/health').send().expect(200);
  });
});
