import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Page, Welcome } from '@organisms';
import { Button, Icon, DynamicSearch } from '@atoms';
import { ROUTES } from '@constants/routes';
import { useGetBreedsQuery } from '@api/breeds';

const Home = () => {
  return (
    <Page $center $column>
      <Welcome>
        <Welcome.Block>
          <Icon name="cat" className={cn('mainIcon')} />
        </Welcome.Block>
        <Welcome.Block>
          <Welcome.Title $center>
            Welcome to <Welcome.Title.Highlight>CATOBREED</Welcome.Title.Highlight>
          </Welcome.Title>
        </Welcome.Block>
        <Welcome.Block $wide>
          <DynamicSearch search={useGetBreedsQuery} placeholder="Search for breeds" size="large" />
        </Welcome.Block>
        <Welcome.Block $wide>
          <Welcome.Row $gap="20" $align>
            <Button as={NavLink} to={ROUTES.BREEDS} $accent>
              Go to the full list of breeds
            </Button>
            <Welcome.Text>or</Welcome.Text>
            <Button as={NavLink} to={ROUTES.IMAGES} $accent>
              Search for images with cats
            </Button>
          </Welcome.Row>
        </Welcome.Block>
      </Welcome>
    </Page>
  );
};

export default Home;
