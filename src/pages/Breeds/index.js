import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
// import  usePrefetch from '@reduxjs/toolkit';
// import { usePrefetch } from '@reduxjs/toolkit/query/react';

import { useGetBreedsQuery, usePrefetch } from '@api/breeds';
import { Empty, Icon, Pagination, Search } from '@atoms';
import { BreedCard } from '@molecules';
import { List, Page } from '@organisms';
import { loading } from '@helpers';
import { BREEDS_SEARCH, BREEDS_LIST } from '@constants/types/breeds';
import { PAGINATION_PARAMS, SEARCH_PARAMS } from '@constants/types/app';
import { ROUTES } from '@constants/routes';

const Breeds = () => {
  const prefetchBreed = usePrefetch('getBreed');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get(SEARCH_PARAMS.NAME);

  const defaultPageNumber = Number(searchParams.get(SEARCH_PARAMS.PAGE)) || PAGINATION_PARAMS.DEFAULT_PAGE_NUMBER;
  const defaultSearchQuery = searchQuery || null;

  const [currentPageNumber, setCurrentPageNumber] = useState(defaultPageNumber);
  const [searchValue, setSearchValue] = useState(defaultSearchQuery);

  const { data: breeds, isFetching: isFetchingBreeds } = useGetBreedsQuery({
    limit: BREEDS_SEARCH.LIMIT,
    page: currentPageNumber - PAGINATION_PARAMS.OFFSET,
    query: searchValue,
  });

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  const handlePaginationChange = (pageNumber) => {
    setCurrentPageNumber(pageNumber);

    if (pageNumber !== PAGINATION_PARAMS.DEFAULT_PAGE_NUMBER) {
      setSearchParams({ page: pageNumber });
    } else {
      searchParams.delete(SEARCH_PARAMS.PAGE);
      setSearchParams(searchParams);
    }
  };

  const handleSearch = useCallback(
    (value) => {
      setSearchValue(value);
      setSearchParams({ name: value });
    },
    [setSearchParams],
  );

  const hasBreeds = breeds?.data.length;
  const hasPagination = !searchValue && hasBreeds;

  return (
    <Page $column>
      <Fragment>
        <Page.Block $column>
          <Page.Header
            title="Breeds"
            subTitle="List of cat breeds"
            extra={<Search defaultValue={searchValue} onSearch={handleSearch} placeholder="Search for breeds" />}
          />
        </Page.Block>

        {loading(
          isFetchingBreeds,
          <Fragment>
            <Page.Block $column>
              {!hasBreeds ? (
                <Page.Block $column>
                  <Empty image={<Icon name={BREEDS_LIST.EMPTY_IMAGE} />} description={BREEDS_LIST.EMPTY} />
                </Page.Block>
              ) : (
                <List>
                  {breeds.data.map(({ id: breedId, ...breed }) => {
                    return (
                      <List.Item key={breedId}>
                        <BreedCard
                          as={NavLink}
                          to={`${ROUTES.BREEDS}/${breedId}`}
                          breed={breed}
                          onMouseEnter={() => prefetchBreed({ id: breedId }, { ifOlderThan: 25 })}
                        />
                      </List.Item>
                    );
                  })}
                </List>
              )}
            </Page.Block>
            {hasPagination && (
              <Page.Block $column>
                <Pagination
                  defaultCurrent={defaultPageNumber}
                  current={currentPageNumber}
                  onChange={handlePaginationChange}
                  total={breeds.total}
                />
              </Page.Block>
            )}
          </Fragment>,
        )}
      </Fragment>
    </Page>
  );
};

export default Breeds;
