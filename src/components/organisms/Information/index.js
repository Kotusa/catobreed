import React from 'react';

import { InformationContainer, InformationIcon, InformationTitle } from './styles';

const Information = ({ children }) => {
  return <InformationContainer>{children}</InformationContainer>;
};

Information.Title = InformationTitle;
Information.Icon = InformationIcon;

export default Information;
