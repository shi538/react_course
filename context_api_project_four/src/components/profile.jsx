
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
const {data} = useContext(UserContext)
  return (
    <div className='w-1/2 mx-auto'>
      <p className='text-xl bg-gray-200 px-3 py-2  rounded-sm
      '>Email: {data?.email || "No email yet"}</p>

    </div>
  );
}

export default Profile;
