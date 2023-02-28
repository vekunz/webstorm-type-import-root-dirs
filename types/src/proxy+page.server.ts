// @ts-nocheck
import type { PageServerLoad } from './$types';

interface MyData {
  parent: string;
  id: string;
}

export const load = async ({params, locals}: Parameters<PageServerLoad>[0]) => {
  const result: MyData = {
    parent: 'parent',
    id: 'id',
  };
  return result;
};
