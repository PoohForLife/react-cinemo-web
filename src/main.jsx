import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    backgroundColor: {
      main: "#50727B",
      secondary: "#78A083",
    },
    color: {
      main: "#FAA300",
      textColor: "#0F1035",
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "600",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
