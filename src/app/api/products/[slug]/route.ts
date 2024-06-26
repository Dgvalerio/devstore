import { z } from 'zod';

// eslint-disable-next-line no-restricted-imports
import data from '../data.json';

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } }
): Promise<Response> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 404 });
  }

  return Response.json(product);
};
