import type { NextRequest } from 'next/server';

import { z } from 'zod';

// eslint-disable-next-line no-restricted-imports
import data from '../data.json';

export const GET = async (request: NextRequest): Promise<Response> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get('q'));

  const product = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  if (!product) {
    return Response.json({ message: 'Products not found.' }, { status: 404 });
  }

  return Response.json(product);
};
