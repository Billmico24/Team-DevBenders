import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { authSelectors } from 'redux/app/auth';
import { actionCurrent } from 'redux/app/auth/auth-operations';
import tokenService from 'service/token.service';

import { Loader, PrivateRoute, PublicRoute, Toaster } from 'components';

const MainPage = lazy(() => import('pages/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));

function App() {
  const dispatch = useDispatch();

  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  const token = tokenService.getLocalAccessToken();

  useEffect(() => {
    if (token) {
      dispatch(actionCurrent());
    }
  }, [dispatch, token]);

  return (
    !isFetchingUser && (
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="" element={<MainPage />} />
            </Route>

            <Route path="/register" element={<PublicRoute restricted />}>
              <Route path="" element={<RegistrationPage />} />
            </Route>

            <Route path="/login" element={<PublicRoute restricted />}>
              <Route path="" element={<LoginPage />} />
            </Route>

            <Route path="/calculator" element={<PrivateRoute />}>
              <Route path="" element={<CalculatorPage />} />
            </Route>

            <Route path="/diary" element={<PrivateRoute />}>
              <Route path="" element={<DiaryPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Toaster />
      </>
    )
  );
}

export default App;
