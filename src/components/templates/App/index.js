import React, { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routes } from '@routes';
import { Loader } from '@atoms';
import { Layout } from '@templates';
import { useApplicationTheme } from '@hooks/useApplicationTheme';
import { THEMES } from '@constants/types/themes';
import { PAGE_TITLES } from '@constants/types/app';

const App = () => {
  const element = useRoutes(routes);

  const { selectedTheme, theme, setInitialApplicationTheme } = useApplicationTheme();

  const location = useLocation();

  useEffect(() => {
    const currentPageTitle = PAGE_TITLES[location.pathname];

    document.title = currentPageTitle ?? PAGE_TITLES.DEFAULT;
  }, [location]);

  useEffect(() => {
    setInitialApplicationTheme(selectedTheme);
  }, [selectedTheme, setInitialApplicationTheme]);

  const currentSelectedTheme = Object.keys(THEMES).find((THEME) => {
    return THEMES[THEME].NAME === theme;
  });

  return (
    <ThemeProvider theme={THEMES[currentSelectedTheme].THEME}>
      <Layout>
        <Suspense fallback={<Loader />}>{element}</Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
