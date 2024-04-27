import { env } from '@/types/env';

export const api = (path: string, init?: RequestInit): Promise<Response> => {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(path, baseUrl);

  return fetch(url, init);
};
