import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import {
  PageContainer,
  PageBlock,
  PageGrid,
  PageHeaderContainer,
  PageBlockItem,
  PageBlockLabel,
  PageBlockHead,
  PageBlockInner,
} from './styles';

const PageHeader = ({ ...rest }) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(ROUTES.ROOT, { replace: true });
    }
  };

  return <PageHeaderContainer onBack={handleBackButton} {...rest} />;
};

const Page = ({ children, ...rest }) => {
  return <PageContainer {...rest}>{children}</PageContainer>;
};

Page.Block = PageBlock;
Page.Block.Head = PageBlockHead;
Page.Block.Inner = PageBlockInner;
Page.Block.Item = PageBlockItem;
Page.Block.Label = PageBlockLabel;
Page.Grid = PageGrid;
Page.Header = PageHeader;

export default Page;
