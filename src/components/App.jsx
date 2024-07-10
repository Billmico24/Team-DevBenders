import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, refreshUser } from 'redux/authorization/authOperations';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { Loader } from './Loader/Loader';
import { setHtmlTagClassname, storageThemeKeyName } from '../theme/themeSwitch';
import { ThemeNames } from '../types/themeNames';

const SidePage = lazy(() => import('pages/SidePage/SidePage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage/CalculatorPage'));
const DairyPage = lazy(() => import('pages/DairyPage/DairyPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const HomePage = lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn) dispatch(getUserInfo());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem(storageThemeKeyName) === ThemeNames.darkTheme) {
      setHtmlTagClassname(ThemeNames.darkTheme);
    } else {
      setHtmlTagClassname(ThemeNames.lightTheme);
    }
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<SidePage />}>
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/diary" element={<DairyPage />} />
              </Route>
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
