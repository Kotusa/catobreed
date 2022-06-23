import { createSlice } from '@reduxjs/toolkit';

import { THEMES } from '@constants/types/themes';

const initialState = {
  theme: THEMES.LIGHT.NAME,
};

export const application = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplicationTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { setApplicationTheme } = application.actions;

export default application.reducer;
