import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const error = 'Invalid environment variables';

  // eslint-disable-next-line
  console.error(error, parsedEnv.error.flatten().fieldErrors);

  throw new Error(error);
}

export const env = parsedEnv.data;
