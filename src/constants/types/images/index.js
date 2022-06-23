export const ORDER = [
  { name: 'Asc', title: 'Ascending' },
  { name: 'Desc', title: 'Descending' },
];

export const MIME_TYPES = [
  { name: 'gif', title: 'Animated' },
  { name: 'jpg', title: 'Static' },
];

export const IMAGES_LIST = {
  EMPTY: 'No images found ;(',
  EMPTY_IMAGE: 'logo',
};

export const IMAGES_FILTERS = {
  MIME_TYPES: 'mime_types',
  ORDER: 'order',
  CATEGORY_IDS: 'category_ids',
  BREED: 'breed_id',
  PAGE: 'page',
  SIZE: 'size',
  LIMIT: 'limit',
};

export const DEFAULT_IMAGE_FILTERS = {
  SIZE: 'full',
  LIMIT: 10,
};
