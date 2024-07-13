import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return token && isLoggedIn ? (
    <Navigate to='/register' />
  ) : (
    <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
  );
};

