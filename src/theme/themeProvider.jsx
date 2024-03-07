import React from 'react'
import { useMemo } from 'react';
import { palette } from './palette'
import { typography } from './typography';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function ThemeProvider({ children }) {
    const memoizedValue = useMemo(() => ({
        palette: palette(),
        typography: typography,
        shape: { borderRadius: 8 },
    }),[]);

    const theme = createTheme(memoizedValue);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    )
}

export default ThemeProvider