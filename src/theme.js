import { createTheme } from '@mui/material';

// export const palette = {
//   primary: {
//     main: '#4c02c5',
//     light: '#7e4ff4',
//     tint: '#ae90fc',
//     contrastText: '#ffffff',
//     scriptbox: '#faf4f8',
//   },
//   secondary: {
//     main: '#4c02c5',
//     light: '#7e4ff4',
//     tint: '#ae90fc',
//     contrastText: '#ffffff',
//   },
//   neutral: {
//     highEm: '#8A2424',
//     mediumEm: '#B75656',
//     disabled: '#948fae',
//     borders: '#d7d5f4',
//     background: '#faf8ff',
//     white: '#FFFFFF',
//     black: '#332222',
//     link: '#D27575',
//     tab: '#007bff',
//   },
// };

export const theme = createTheme({
  spacing: [0, 4, 8, 16, 24, 32, 40, 48],
  typography:{
    htmlFontSize: 16,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.75rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: 0,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
  },

  // palette,
  // typography: {
  //   fontFamily: "'Open Sans', sans-serif",
  //   fontSize: 12,
  //   breadcrumbs: {
  //     fontSize: '12px',
  //     fontWeight: 400,
  //     textDecoration: 'none',
  //     fontFamily: 'Open Sans',
  //   },
  //   h2: {
  //     fontSize: '24px',
  //     lineHeight: '32px',
  //     fontWeight: 700,
  //   },
  //   subheading: {
  //     fontSize: '18px',
  //     fontWeight: 600,
  //   },
  //   body1: {
  //     fontSize: '14px',
  //   },
  //   body2: {
  //     fontSize: '12px',
  //   },
  //   h3: {
  //     fontFamily: 'Nunito Sans',
  //     fontWeight: 700,
  //     fontSize: '20px',
  //     lineHeight: '24px',
  //   },
  //   h4: {
  //     fontSize: '16px',
  //     lineHeight: '20px',
  //     fontWeight: 700,
  //   },
  //   h5: {
  //     fontSize: '14px',
  //     fontWeight: 700,
  //   },
  // },
});
