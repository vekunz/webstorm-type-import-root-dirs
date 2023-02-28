// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async ({locals}: Parameters<LayoutServerLoad>[0]) => {
  return {
    featureFlags: new Map<string, boolean>(),
    spaces: [],
    userData: {
        id: 'ud.id',
        name: 'ud.name',
        email: 'ud.email'
      },
    locale: 'locals.locale'
  };
};
