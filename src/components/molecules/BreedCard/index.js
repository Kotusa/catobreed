import React from 'react';

import { Avatar } from '@atoms';
import { Card } from '@molecules';
import { useGetImageByIdQuery } from '@api/images';

const { Inner, Block, Title, Description } = Card;

const BreedCard = ({ breed, ...rest }) => {
  const { reference_image_id: referenceImageId, name, origin, life_span: lifeSpan } = breed;

  const clearReferenceImageId = referenceImageId?.replace(/(\r\n|\n|\r)/gm, '');

  const { data: cardImage } = useGetImageByIdQuery({ id: clearReferenceImageId }, { skip: !referenceImageId });

  return (
    <Card {...rest}>
      <Avatar url={cardImage?.url} />
      <Inner>
        <Block>
          <Title>{name}</Title>
          <Block $row>
            <Description>
              <Description.Title>Origin</Description.Title>
              <Description.Content>{origin}</Description.Content>
            </Description>
            <Description>
              <Description.Title>Life span</Description.Title>
              <Description.Content>{lifeSpan}</Description.Content>
            </Description>
          </Block>
        </Block>
      </Inner>
    </Card>
  );
};

export default BreedCard;
