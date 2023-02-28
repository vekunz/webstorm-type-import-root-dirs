// @ts-nocheck
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// eslint-disable-next-line @typescript-eslint/require-await
export const load = async () => {
  throw redirect(307, '/folders');
};
;null as any as PageServerLoad;