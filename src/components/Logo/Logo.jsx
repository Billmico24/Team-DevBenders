import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';

import logoPC from '../../images/logo/logoPC.svg';
import logotab from '../../images/logo/logotab.svg';
import logoMob from '../../images/logo/logoMob.svg';

export const Logo = () => {
  const { width } = useWindowSize();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // return (
  //   <Link to="/">
  //     <img
  //       src={width > 1279 ? logoPC : logotab && width < 768 ? logoMob : logotab}
  //       alt="SlimMom"
  //     />
  //   </Link>
  // );

  return (
    <Link to="/">
      {isLoggedIn ? (
        <img src={width > 1279 ? logoPC : logotab} alt="SlimMom" />
      ) : (
        <img
          src={
            width > 1279 ? logoPC : logotab && width < 768 ? logoMob : logotab
          }
          alt="SlimMom"
        />
      )}
    </Link>
  );
};
