import { useEffect, useState } from 'react';
// import { Users, RotateCcw, Pencil, Trash2, Search } from 'lucide-react';
import useApi from '../../useApi/useApi';
import { UserTile } from './UserTile';

const UserManagement = () => {
  const { data: apiUsers, loading, error, fetchData, deleteData } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    try {
      const response = await fetchData('user/view');
      
      setUsers(response.data.Users || []);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }
  const DeleteData = async (id) => {
    try {
        await deleteData('Nav/hover/delete', id); // Await the delete operation
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id)); // Filter out the deleted user
    } catch (err) {
        console.error("Error deleting user:", err);
    }
};

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
          <UserTile 
            key={user._id} 
            user={user} 
            onUpdate={handleUserUpdate}
            DeleteData={DeleteData}
          />
        ))
      )}
    </div>
  );
}

export default UserManagement;