import Logo from '@/assets/logo.png';
import { useKeycloak } from '@bcgov/keycloak-react';

const Navbar = () => {
  const { state: authState, getLoginURL, getLogoutURL } = useKeycloak();
  const user = authState.userInfo;

  return (
    <nav className="flex h-20 w-full items-center border-b-2 border-yellow-500 bg-blue-500">
      <img className="ml-8 h-full" alt="logo" src={Logo} />
      <p className="ml-5 text-xl text-white">Team Hollandaise</p>
      {user ? (
        <button onClick={() => (window.location.href = getLogoutURL())}>Logout</button>
      ) : (
        <button onClick={() => (window.location.href = getLoginURL())}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
