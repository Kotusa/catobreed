import React, { useCallback, useState, useMemo, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { Search } from '@atoms';
import { Dropdown } from '@molecules';
import { ROUTES } from '@constants/routes';
import useDebounce from '@hooks/useDebounce';

import { DynamicSearchContainer } from './styles';

const DynamicSearch = memo(({ search, ...rest }) => {
  const [searchValue, setSearchValue] = useState(null);
  const [isAllowedSearch, setIsAllowedSearch] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { location } = useLocation();

  const debouncedValue = useDebounce(searchValue, 500);

  const { data: items, isFetching: isFetchingItems } = search(
    { query: debouncedValue },
    {
      skip: !isAllowedSearch,
    },
  );

  const navigate = useNavigate();

  const handleSearchFocus = useCallback(() => {
    setIsDropdownVisible(true);
    setIsAllowedSearch(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 100);
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleSearchButton = useCallback(
    (value) => {
      if (value) {
        navigate({
          pathname: ROUTES.BREEDS,
          search: `?name=${value}`,
        });
      }
    },
    [navigate],
  );

  const hasBreeds = items?.data.length > 0;

  const getInitialBreedsItems = useMemo(() => {
    return items?.data.map((breed) => ({
      label: (
        <NavLink to={`${ROUTES.BREEDS}/${breed.id}`} state={{ from: location }}>
          {breed.name}
        </NavLink>
      ),
      key: breed.id,
    }));
  }, [items, location]);

  return (
    <DynamicSearchContainer>
      <Dropdown
        visible={isDropdownVisible}
        hasItems={hasBreeds}
        items={getInitialBreedsItems}
        isLoading={isFetchingItems}
      >
        <Search
          value={searchValue}
          onSearch={handleSearchButton}
          onChange={handleSearch}
          onBlur={handleSearchBlur}
          onFocus={handleSearchFocus}
          {...rest}
        />
      </Dropdown>
    </DynamicSearchContainer>
  );
});

export default DynamicSearch;
