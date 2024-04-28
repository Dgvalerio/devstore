import { ImageResponse } from 'next/og';

import { ProductPageProps } from '@/app/(store)/product/[slug]/page';
import { api } from '@/data/api';
import { env } from '@/data/types/env';
import { Product } from '@/data/types/product';

import colors from 'tailwindcss/colors';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const getProduct = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: { revalidate: 60 * 60 /* 1 Hour */ },
  });

  return await response.json();
};

const OgImage = async ({
  params,
}: ProductPageProps): Promise<ImageResponse> => {
  const product = await getProduct(params.slug);
  const imageUrl = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={product.title} style={{ width: '100%' }} />
      </div>
    ),
    { ...size }
  );
};

// eslint-disable-next-line no-restricted-syntax
export default OgImage;
