import React from 'react';

import {
  CardDescriptionContent,
  CardBlock,
  CardContainer,
  CardDescription,
  CardDescriptionTitle,
  CardImage,
  CardInner,
  CardLink,
  CardTitle,
} from './styles';

const Card = ({ children, ...rest }) => {
  return <CardContainer {...rest}>{children}</CardContainer>;
};

Card.Inner = CardInner;
Card.Block = CardBlock;
Card.Title = CardTitle;

Card.Description = CardDescription;
Card.Description.Title = CardDescriptionTitle;
Card.Description.Content = CardDescriptionContent;

Card.Image = CardImage;
Card.Link = CardLink;

export default Card;
