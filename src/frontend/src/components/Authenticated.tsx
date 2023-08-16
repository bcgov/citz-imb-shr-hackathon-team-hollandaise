import { useKeycloak } from '@bcgov/keycloak-react';
import Table from './Table';
import Landing from './Landing'; 

function Authenticated() {
  const { state: authState } = useKeycloak();
  const user = authState.userInfo;

  if (user) {
    return <Table />;
  }
  return <Landing />;
}

export default Authenticated;
