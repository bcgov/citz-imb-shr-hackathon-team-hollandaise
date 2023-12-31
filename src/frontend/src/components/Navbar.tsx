import Logo from '@/assets/logo.png';
import { useKeycloak } from '@bcgov/keycloak-react';

const Navbar = () => {
  const { state: authState, getLoginURL, getLogoutURL } = useKeycloak();
  const user = authState.userInfo;

  return (
    <nav className="flex h-20 w-full items-center border-b-2 border-yellow-500 bg-blue-500 justify-between">
      <img className="h-full ml-8" alt="logo" src={Logo} />
      <p className="text-xl text-white mr-20">Team Hollandaise</p>
      {user ? (
        <button
          onClick={() => (window.location.href = getLogoutURL())}
          className="border-2 border-white text-white px-4 py-2 rounded hover:bg-blue-200 mr-8"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => (window.location.href = getLoginURL())}
          className="border-2 border-white text-white px-4 py-2 rounded hover:bg-blue-200 mr-8"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
