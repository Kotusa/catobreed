import { commonTheme as theme } from '@theme';

const breakpoint = {
  xxxl: `(max-width: ${theme.breakpoints.xxxl})`, // 1949.9px
  xxl: `(max-width: ${theme.breakpoints.xxl})`, // 1799.9px
  xl: `(max-width: ${theme.breakpoints.xl})`, // 1499.9px
  xlg: `(max-width: ${theme.breakpoints.xlg})`, // 1399.9px
  lg: `(max-width: ${theme.breakpoints.lg})`, // 1199.9px
  md: `(max-width: ${theme.breakpoints.md})`, // 991.9px
  sm: `(max-width: ${theme.breakpoints.sm})`, // 767.9px
  xs: `(max-width: ${theme.breakpoints.xs})`, // 575.9px
  xxs: `(max-width: ${theme.breakpoints.xxs})`, // 373.9px
};

export default breakpoint;
