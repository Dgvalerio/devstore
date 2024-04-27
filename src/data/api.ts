import { env } from '@/data/types/env';

export const api = (path: string, init?: RequestInit): Promise<Response> => {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const prefix = 'api';
  const url = new URL(prefix.concat(path), baseUrl);

  return fetch(url, init);
};
