// eslint-disable-next-line no-restricted-imports
import data from './data.json';

export const GET = async (): Promise<Response> => Response.json(data.products);
