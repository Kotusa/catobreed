import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Information, Page } from '@organisms';
import { Button, Icon } from '@atoms';
import { ROUTES } from '@constants/routes';
import { PAGE_TITLES } from '@constants/types/app';

const NotFound = () => {
  useEffect(() => {
    document.title = PAGE_TITLES.NOT_FOUND;
  }, []);

  return (
    <Page $center $column>
      <Information>
        <Information.Title $large>404</Information.Title>
        <Information.Title>Page not found</Information.Title>
        <Information.Icon>
          <Icon name="pawprint" />
        </Information.Icon>
      </Information>
      <Button as={NavLink} to={ROUTES.ROOT}>
        Back to home page
      </Button>
    </Page>
  );
};

export default NotFound;
