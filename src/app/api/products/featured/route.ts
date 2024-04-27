// eslint-disable-next-line no-restricted-imports
import data from '../data.json';

export const GET = async (): Promise<Response> => {
  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
};
