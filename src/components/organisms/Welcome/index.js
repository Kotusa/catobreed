import React from 'react';

import { WelcomeBlock, WelcomeContainer, WelcomeRow, WelcomeText, WelcomeTitle, WelcomeTitleHighlight } from './styles';

const Welcome = ({ children }) => {
  return <WelcomeContainer>{children}</WelcomeContainer>;
};

Welcome.Block = WelcomeBlock;
Welcome.Title = WelcomeTitle;
Welcome.Title.Highlight = WelcomeTitleHighlight;
Welcome.Row = WelcomeRow;
Welcome.Text = WelcomeText;

export default Welcome;
