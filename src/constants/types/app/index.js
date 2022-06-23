import { ROUTES } from '@constants/routes';

export const PAGINATION_PARAMS = {
  DEFAULT_PAGE_NUMBER: 1,
  OFFSET: 1,
};

export const SEARCH_PARAMS = {
  NAME: 'name',
  ORDER: 'order',
  MIME_TYPE: 'type',
  CATEGORY_ID: 'category_id',
  PAGE: 'page',
  BREED: 'breed',
};

export const PAGE_TITLES = {
  DEFAULT: 'Catobreed',
  NOT_FOUND: 'Catobreed | Not Found',
  [ROUTES.ROOT]: 'Catobreed | Home',
  [ROUTES.IMAGES]: 'Catobreed | Images',
  [ROUTES.BREEDS]: 'Catobreed | Breeds',
};
