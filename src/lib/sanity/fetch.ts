import { sanityClient } from './client';

export async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}
