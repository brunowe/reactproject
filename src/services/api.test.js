import { expect, it } from 'vitest';
import api from './api';

it('mantem o cliente axios apontando para a API do GitHub', async () => {
  const response = await api.get('/repos/brunowe/reactproject', {
    adapter: async (config) => ({
      data: { url: api.getUri(config) },
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    }),
  });
  expect(response.data.url).toBe(
    'https://api.github.com/repos/brunowe/reactproject'
  );
});
