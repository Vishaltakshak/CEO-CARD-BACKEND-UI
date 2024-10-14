
import { useEffect } from 'react';
import useApi from '../../useApi/useApi';
import { useState } from 'react';
import SubCatTile from './SubCatTile';


const SubCatTiles = () => {
    const { data: loading, error, fetchData,  } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSubCat();
  }, []);
  
  const getSubCat = async () => {
    try {
      const response = await fetchData('Nav/hover/view');
      setUsers(response.data.Data || []);
      console.log('subcat',response)
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }

  const handleUserUpdate = (updatedUser) => {
    setUsers(prevUsers => prevUsers.map(user => 
      user._id === updatedUser._id ? updatedUser : user
    ));
  }

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users.length === 0 ? (
        <div>No users found</div>
      ) : (
        users.map(user => (
          <SubCatTile
            key={user._id} 
            subCat={user} 
            onUpdate={handleUserUpdate}
          />
        ))
      )}
    </div>
  );
 
}

export default SubCatTiles;
