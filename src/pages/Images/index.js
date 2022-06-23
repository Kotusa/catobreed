import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetBreedsQuery } from '@api/breeds';
import { useGetCategoriesQuery, useGetImagesQuery } from '@api/images';
import { Empty, Icon, Image, Pagination, Select } from '@atoms';
import { Page, Grid } from '@organisms';
import { loading } from '@helpers';
import { PAGINATION_PARAMS, SEARCH_PARAMS } from '@constants/types/app';
import { DEFAULT_IMAGE_FILTERS, MIME_TYPES, ORDER, IMAGES_LIST, IMAGES_FILTERS } from '@constants/types/images';

const Images = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = Number(searchParams.get(SEARCH_PARAMS.PAGE)) || PAGINATION_PARAMS.DEFAULT_PAGE_NUMBER;

  const defaultSearchOrder = searchParams.get(SEARCH_PARAMS.ORDER) || ORDER[0].name;
  const defaultSearchMimeTypes = searchParams.get(SEARCH_PARAMS.MIME_TYPE) || null;
  const defaultSearchCategory = Number(searchParams.get(SEARCH_PARAMS.CATEGORY_ID)) || null;
  const defaultSearchBreed = searchParams.get(SEARCH_PARAMS.BREED) || null;

  const [currentPageNumber, setCurrentPageNumber] = useState(pageNumber);

  const [currentOrder, setCurrentOrder] = useState(defaultSearchOrder);
  const [currentMimeType, setCurrentMimeType] = useState(defaultSearchMimeTypes);
  const [currentCategory, setCurrentCategory] = useState(defaultSearchCategory);
  const [currentBreed, setCurrentBreed] = useState(defaultSearchBreed);

  useEffect(() => {
    setCurrentOrder(defaultSearchOrder);
    setCurrentMimeType(defaultSearchMimeTypes);
    setCurrentCategory(defaultSearchCategory);
    setCurrentBreed(defaultSearchBreed);
    setCurrentPageNumber(pageNumber);
  }, [pageNumber, defaultSearchOrder, defaultSearchMimeTypes, defaultSearchCategory, defaultSearchBreed]);

  useEffect(() => {
    const currentSearchParams = {
      order: currentOrder,
      ...(currentMimeType && { [SEARCH_PARAMS.MIME_TYPE]: currentMimeType }),
      ...(currentCategory && { [SEARCH_PARAMS.CATEGORY_ID]: currentCategory }),
      ...(currentBreed && { [SEARCH_PARAMS.BREED]: currentBreed }),
      ...(currentPageNumber !== PAGINATION_PARAMS.DEFAULT_PAGE_NUMBER && { [SEARCH_PARAMS.PAGE]: currentPageNumber }),
    };

    setSearchParams(currentSearchParams);
  }, [currentBreed, currentCategory, currentMimeType, currentOrder, currentPageNumber, setSearchParams]);

  const { data: images, isFetching: isFetchingImages } = useGetImagesQuery({
    [IMAGES_FILTERS.ORDER]: currentOrder,
    [IMAGES_FILTERS.MIME_TYPES]: currentMimeType,
    [IMAGES_FILTERS.CATEGORY_IDS]: currentCategory,
    [IMAGES_FILTERS.BREED]: currentBreed,
    [IMAGES_FILTERS.PAGE]: currentPageNumber - PAGINATION_PARAMS.OFFSET,
    [IMAGES_FILTERS.SIZE]: DEFAULT_IMAGE_FILTERS.SIZE,
    [IMAGES_FILTERS.LIMIT]: DEFAULT_IMAGE_FILTERS.LIMIT,
  });

  const { data: categories, isFetching: isFetchingCategories } = useGetCategoriesQuery({});

  const { data: breeds, isFetching: isFetchingBreeds } = useGetBreedsQuery({});

  const handleFilterChange = ({ type, value }) => {
    switch (type) {
      case IMAGES_FILTERS.ORDER:
        setCurrentOrder(value);
        break;
      case IMAGES_FILTERS.MIME_TYPES:
        setCurrentMimeType(value);
        break;
      case IMAGES_FILTERS.CATEGORY_IDS:
        setCurrentCategory(value);
        break;
      case IMAGES_FILTERS.BREED:
        setCurrentBreed(value);
        setCurrentPageNumber(PAGINATION_PARAMS.DEFAULT_PAGE_NUMBER);
        break;
      case IMAGES_FILTERS.PAGE:
        setCurrentPageNumber(value);
        break;
      default:
        break;
    }
  };

  const hasImages = Number(images?.total) > 0;

  return (
    <Page $column>
      <Page.Block $column>
        <Page.Header title="Images" subTitle="Funny images with cats" />
      </Page.Block>
      <Page.Block $column>
        <Page.Block.Head>
          <Page.Block.Label>Use filters to make your search more precise</Page.Block.Label>
        </Page.Block.Head>

        <Page.Block.Inner $row>
          <Page.Block.Item $fixedWidth>
            <Select
              onChange={(value) => handleFilterChange({ type: IMAGES_FILTERS.MIME_TYPES, value })}
              defaultValue={currentMimeType}
              $fullWidth
            >
              <Select.Option value={null}>All types</Select.Option>
              {MIME_TYPES.map((type) => (
                <Select.Option key={type.name} value={type.name}>
                  {type.title}
                </Select.Option>
              ))}
            </Select>
          </Page.Block.Item>

          <Page.Block.Item $fixedWidth>
            <Select
              onChange={(value) => handleFilterChange({ type: IMAGES_FILTERS.ORDER, value })}
              defaultValue={currentOrder}
              $fullWidth
            >
              {ORDER.map((orderType) => (
                <Select.Option key={orderType.name} value={orderType.name}>
                  {orderType.title}
                </Select.Option>
              ))}
            </Select>
          </Page.Block.Item>

          <Page.Block.Item $fixedWidth>
            <Select
              loading={isFetchingCategories}
              onChange={(value) => handleFilterChange({ type: IMAGES_FILTERS.CATEGORY_IDS, value })}
              defaultValue={currentCategory}
              $fullWidth
            >
              <Select.Option value={null}>All categories</Select.Option>
              {categories?.map((categoryItem) => (
                <Select.Option key={categoryItem.id} value={categoryItem.id}>
                  {categoryItem.name}
                </Select.Option>
              ))}
            </Select>
          </Page.Block.Item>

          <Page.Block.Item $fixedWidth>
            <Select
              loading={isFetchingBreeds}
              onChange={(value) => handleFilterChange({ type: IMAGES_FILTERS.BREED, value })}
              defaultValue={currentBreed}
              $fullWidth
            >
              <Select.Option value={null}>No breeds</Select.Option>
              {breeds?.data.map((breedItem) => (
                <Select.Option key={breedItem.id} value={breedItem.id}>
                  {breedItem.name}
                </Select.Option>
              ))}
            </Select>
          </Page.Block.Item>
        </Page.Block.Inner>
      </Page.Block>
      {loading(
        isFetchingImages,
        <Fragment>
          {hasImages ? (
            <Fragment>
              <Page.Block $column>
                <Grid $col="5">
                  {images.data.map((image) => (
                    <Image key={image.id} src={image.url} />
                  ))}
                </Grid>
              </Page.Block>
              <Page.Block>
                <Pagination
                  defaultCurrent={pageNumber}
                  current={currentPageNumber}
                  onChange={(value) => handleFilterChange({ type: IMAGES_FILTERS.PAGE, value })}
                  total={images.total}
                />
              </Page.Block>
            </Fragment>
          ) : (
            <Page.Block $column>
              <Empty image={<Icon name={IMAGES_LIST.EMPTY_IMAGE} />} description={IMAGES_LIST.EMPTY} />
            </Page.Block>
          )}
        </Fragment>,
      )}
    </Page>
  );
};

export default Images;
