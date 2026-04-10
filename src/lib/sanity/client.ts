import { createClient, type SanityClient } from 'next-sanity';
import { sanityConfig } from '@/config/sanity';

const isSanityConfigured = Boolean(sanityConfig.projectId);

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
    })
  : null;
