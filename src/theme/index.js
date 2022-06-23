export const commonTheme = {
  fonts: {
    primary: 'Nunito',
  },
  breakpoints: {
    xxxl: '1949.9px',
    xxl: '1799.9px',
    xl: '1499.9px',
    xlg: '1399.9px',
    lg: '1199.9px',
    md: '991.9px',
    sm: '767.9px',
    xs: '575.9px',
    xxs: '373.9px',
  },
};

export const lightTheme = {
  ...commonTheme,
  palette: {
    body: '#f5f6fa',
    secondary: '#dcdde1',
    accent: '#8c7ae6',
    text: '#22262F',
    secondaryText: '#8E8E91',
    card: '#FCFDFF',
    border: '#afafaf',
    success: '#10ac84',
    error: '#ee5253',
  },
};

export const darkTheme = {
  ...commonTheme,
  palette: {
    body: '#22262F',
    secondary: '#0D1118',
    accent: '#8c7ae6',
    text: '#f5f6fa',
    secondaryText: '#828A9D',
    card: '#3D4350',
    border: '#afafaf',
    success: '#10ac84',
    error: '#ee5253',
  },
};
