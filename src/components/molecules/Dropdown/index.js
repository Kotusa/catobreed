import React, { Fragment } from 'react';

import { Loader, Empty, Icon } from '@atoms';

import { DropdownContainer, DropdownMenu, DropdownPlaceholder } from './styles';

const Dropdown = ({ children, isLoading, items, hasItems, ...rest }) => {
  const loadingOverlay = () => {
    if (isLoading)
      return (
        <DropdownPlaceholder>
          <Loader />
        </DropdownPlaceholder>
      );

    if (!hasItems) {
      return (
        <DropdownPlaceholder>
          <Empty image={<Icon name="logo" />} description="No breeds found :(" />
        </DropdownPlaceholder>
      );
    }

    return <DropdownMenu items={items} />;
  };

  return (
    <DropdownContainer overlay={loadingOverlay()} {...rest}>
      <Fragment>{children}</Fragment>
    </DropdownContainer>
  );
};

export default Dropdown;
