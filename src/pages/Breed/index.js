import React, { Fragment, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

import { useGetBreedQuery } from '@api/breeds';
import { useGetImagesQuery } from '@api/images';
import { Checkmark, Loader, Rate } from '@atoms';
import { Carousel, DetailedInformation } from '@molecules';
import { Page } from '@organisms';
import { loading } from '@helpers';
import { PAGE_TITLES } from '@constants/types/app';
import { BREED_RATES, BREED_CHECKS, BREED_LINKS } from '@constants/types/breeds';

const Breed = () => {
  const { id } = useParams();

  const { data: breed, isFetching: isFethcingBreed } = useGetBreedQuery({ id });
  const currentBreed = useMemo(() => breed || {}, [breed]);

  const { data: images, isFetching: isFethcingImages } = useGetImagesQuery({ limit: 8, size: 'full', breed_id: id });
  const breedImages = images?.data || [];
  const hasImages = Number(images?.total) > 0;

  useEffect(() => {
    document.title = `${PAGE_TITLES.DEFAULT} | ${currentBreed.name}`;
  }, [currentBreed]);

  return (
    <Page $column>
      {loading(
        isFethcingBreed,
        <Fragment>
          <Page.Block $column>
            <Page.Header title="Detailed" subTitle={`Learn more about ${currentBreed.name}`} />
          </Page.Block>
          <Page.Grid>
            {isFethcingImages ? (
              <Loader />
            ) : (
              hasImages && (
                <Page.Block $noMargin>
                  <Carousel autoplay arrows>
                    {breedImages.map((image) => {
                      const { id: imageID, url: imageURL, breeds: imageBreeds } = image;

                      return (
                        <Carousel.Slide key={imageID}>
                          <Carousel.Image src={imageURL} alt={imageBreeds[0].name} className="slideImage" />
                        </Carousel.Slide>
                      );
                    })}
                  </Carousel>
                </Page.Block>
              )
            )}
            <Page.Block>
              <DetailedInformation>
                <DetailedInformation.Title>
                  {currentBreed.name}{' '}
                  {currentBreed.origin && <DetailedInformation.Text>{currentBreed.origin}</DetailedInformation.Text>}
                </DetailedInformation.Title>
                <DetailedInformation.Block>
                  {currentBreed.temperament && (
                    <DetailedInformation.Text $accent>{currentBreed.temperament}</DetailedInformation.Text>
                  )}
                  {currentBreed.description && (
                    <DetailedInformation.Description>{currentBreed.description}</DetailedInformation.Description>
                  )}
                </DetailedInformation.Block>
                <DetailedInformation.Block>
                  {currentBreed.weight && (
                    <DetailedInformation.Description>
                      Weight:{' '}
                      <DetailedInformation.Bold>
                        {currentBreed.weight.metric} kg. ({currentBreed.weight.imperial} lbs.)
                      </DetailedInformation.Bold>
                    </DetailedInformation.Description>
                  )}
                  {currentBreed.life_span && (
                    <DetailedInformation.Description>
                      Life span: <DetailedInformation.Bold>{currentBreed.life_span} years</DetailedInformation.Bold>
                    </DetailedInformation.Description>
                  )}
                </DetailedInformation.Block>
                <DetailedInformation.Dash />
                <DetailedInformation.Grid $col="4" $gap="5">
                  {BREED_CHECKS.map((check) => (
                    <Checkmark key={check.name} label={check.title} checked={currentBreed[check.name]} />
                  ))}
                </DetailedInformation.Grid>
                <DetailedInformation.Dash />
                <DetailedInformation.Grid $col="3">
                  {BREED_RATES.map(
                    (rate) =>
                      currentBreed[rate.name] && (
                        <Rate key={rate.name} disabled defaultValue={currentBreed[rate.name]} label={rate.title} />
                      ),
                  )}
                </DetailedInformation.Grid>
                <DetailedInformation.Dash />
                <DetailedInformation.Block>
                  <DetailedInformation.Text>Learn more about {currentBreed.name} below:</DetailedInformation.Text>
                  {BREED_LINKS.map(
                    (link) =>
                      currentBreed[link.name] && (
                        <DetailedInformation.Link key={link.name} href={currentBreed[link.name]} target="_blank">
                          {link.title}
                        </DetailedInformation.Link>
                      ),
                  )}
                </DetailedInformation.Block>
              </DetailedInformation>
            </Page.Block>
          </Page.Grid>
        </Fragment>,
      )}
    </Page>
  );
};

export default Breed;
