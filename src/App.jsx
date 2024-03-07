import React from 'react'
import MainPage from './pages/mainPage/mainPage'
import LoginPage from './pages/loginPage/loginPage'
import NotFoundPage from './pages/notFoundPage/notFoundPage'
import MovieDetailPage from './pages/movieDetailPage/movieDetailPage'
import { Outlet } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import MenuBar from './components/menuBar/menuBar'
import ThemeProvider from './theme/themeProvider'

function App() {
  const elements = useRoutes([
    {
      element: (
        <MenuBar>
          <Outlet />
        </MenuBar>
      ),
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/movie/:id', element: <MovieDetailPage /> },
      ]
    },
    { path: '/login', element: <LoginPage />},
    { path: '*', element: <NotFoundPage />}
  ]);

  return (
    <ThemeProvider>
        {elements}
    </ThemeProvider>
  );
}

export default App
