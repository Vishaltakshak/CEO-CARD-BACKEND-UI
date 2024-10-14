import { useEffect, useState } from 'react';

import useApi from '../../useApi/useApi';
import InventoryTile from './InventoryTile';

const Inv = () => {
  const { data: apiUsers, loading, error, fetchData, deleteData } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    try {
      const response = await fetchData('Inventory/management/view');
      console.log("vendors aree", response);
      setUsers(response.data.Data || []);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }

  const handleUserUpdate = (updatedUser) => {
    setUsers(prevUsers => prevUsers.map(user => 
      user._id === updatedUser._id ? updatedUser : user
    ));
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users.length === 0 ? (
        <div>No users found</div>
      ) : (
        users.map(user => (
          <InventoryTile
            key={user._id} 
            user={user} 
            onUpdate={handleUserUpdate}
          />
        ))
      )}
    </div>
  );
}

export default Inv;