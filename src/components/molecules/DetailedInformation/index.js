import React from 'react';

import {
  DetailedInformationBlock,
  DetailedInformationBold,
  DetailedInformationContainer,
  DetailedInformationDash,
  DetailedInformationDescription,
  DetailedInformationGrid,
  DetailedInformationLink,
  DetailedInformationText,
  DetailedInformationTitle,
} from './styles';

const DetailedInformation = ({ children }) => {
  return <DetailedInformationContainer>{children}</DetailedInformationContainer>;
};

DetailedInformation.Block = DetailedInformationBlock;
DetailedInformation.Title = DetailedInformationTitle;
DetailedInformation.Description = DetailedInformationDescription;
DetailedInformation.Text = DetailedInformationText;
DetailedInformation.Grid = DetailedInformationGrid;
DetailedInformation.Bold = DetailedInformationBold;
DetailedInformation.Dash = DetailedInformationDash;
DetailedInformation.Link = DetailedInformationLink;

export default DetailedInformation;
