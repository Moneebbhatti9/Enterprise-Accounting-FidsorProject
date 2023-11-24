import { Body } from '../../Global/Styling';
import PageHeader from '../../Global/Components/MainPageHeader';
import DataGrid from '../../Global/ImprovedComponents/DataGrid';
import jsonData from '../../Global/DummyData/User.json';
import { useEffect, useState } from 'react';
import { getAllRoles } from 'libs/services/RolesService/RolesService';
const AllRoles = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const [roleData, setRoleData] = useState([]);
  const columns = [
    'id',
    'name',
    'createdOn',
    'modifiedOn',
    'actions',
  ];
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  async function fetchRoles() {
    try {
      setLoading(true);
      const data = await getAllRoles();
      console.log(data);
      const reversedData = data.reverse();
      setRoleData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching roles:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchRoles();
      setFetchData(false);
    }
    fetchRoles();
  }, [fetchData]);
  return (
    <Body>
      <PageHeader
        title="sidebar.user.role"
        linkTo=""
        intlMessage="sidebar.user.addRole"
        menuItems={[]}
      />
      <DataGrid
        columns={columns}
        jsonData={roleData}
        link={''}
        name={'Roles'}
        fetchData={setFetchData}
        deleteRecord={setDeleteRecord}
        onCellClick={handleCellClick}
        actionItems={[]}
        canDelete={true}
      />
    </Body>
  );
};
export default AllRoles;
