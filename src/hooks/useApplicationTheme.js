import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setApplicationTheme } from '@reducers/application';
import { THEMES } from '@constants/types/themes';

import { useLocalStorage } from './useLocalStorage';

export const useApplicationTheme = () => {
  const { theme } = useSelector(({ application }) => application);

  const [selectedTheme, setSelectedTheme] = useLocalStorage('theme', THEMES.LIGHT.NAME);

  const dispatch = useDispatch();

  const setInitialApplicationTheme = useCallback(
    (updatedTheme) => {
      dispatch(setApplicationTheme(updatedTheme));
    },
    [dispatch],
  );

  const updateApplicationTheme = useCallback(
    (updatedTheme) => {
      dispatch(setApplicationTheme(updatedTheme));
      setSelectedTheme(updatedTheme);
    },
    [dispatch, setSelectedTheme],
  );

  return { selectedTheme, theme, updateApplicationTheme, setInitialApplicationTheme };
};
