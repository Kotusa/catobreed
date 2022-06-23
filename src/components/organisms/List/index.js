import React from 'react';

import { ListContainer, ListItemConitaner } from './styles';

const ListItem = ({ children }) => {
  return <ListItemConitaner>{children}</ListItemConitaner>;
};

const List = ({ children }) => {
  return <ListContainer>{children}</ListContainer>;
};

List.Item = ListItem;

export default List;
