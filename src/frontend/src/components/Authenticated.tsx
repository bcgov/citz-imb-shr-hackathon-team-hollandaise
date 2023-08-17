import { useKeycloak } from '@bcgov/keycloak-react';
import Table from '@/components/Table';
import Landing from '@/components/Landing';

function Authenticated() {
  const { state: authState } = useKeycloak();
  const user = authState.userInfo;

  if (user) {
    return <Table />;
  }
  return <Landing />;
}

export default Authenticated;
