import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { loginUser } from 'redux/authorization/authOperations';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import scss from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogin = userData => {
    dispatch(loginUser(userData));
  };

  return (
    <>
      {!isLoggedIn && (
        <div className={scss.loginPage}>
          <AuthorizationForm isRegisterForm={false} onSubmit={handleLogin} />
        </div>
      )}
      {isLoggedIn && <Navigate to="/" />}
    </>
  );
};

export default LoginPage;
