
import { useEffect } from 'react';
import useApi from '../../useApi/useApi';
import { useState } from 'react';
import ServiceTile from './ServiceTile';



const ServiceProviderTIles = () => {
    const { data: loading, error, fetchData,  } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSubCat();
  }, []);
  
  const getSubCat = async () => {
    try {
      const response = await fetchData('subnav/link/view');
      setUsers(response.data.Data || []);
      console.log('service',response)
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
          <ServiceTile
            key={user._id} 
            service={user} 
            onUpdate={handleUserUpdate}
          />
        ))
      )}
    </div>
  );
 
}

export default ServiceProviderTIles;
