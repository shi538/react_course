import { useState } from 'react'
import Login from './components/login';
import Profile from './components/profile';
import UserContextProvider from './context/UserContextProvider';


function App() {
  

  return (
    <>
     <UserContextProvider>
          <Login/>
          <Profile/>
     </UserContextProvider>

    </>
  )
}

export default App;

