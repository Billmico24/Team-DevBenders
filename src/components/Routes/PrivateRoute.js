import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const PrivateRoute = () => {
  const token = useSelector(selectToken)

  return token ? (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/register' />
  );
};