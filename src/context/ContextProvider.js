import { useState, useEffect } from 'react'
import DataContext from './DataContext'

export default function ContextProvider({ children }) {
  let storedManage = {};
  try {
    storedManage = JSON.parse(localStorage.getItem('manage') || '{}');
  } catch (e) {
    storedManage = {};
  }
  const [manage, setManage] = useState({
    isLoggedIn: storedManage.isLoggedIn || false,
    authToken: storedManage.authToken || '',
    usertype: storedManage.usertype || '',
    userdetails: storedManage.userdetails || ''

  })
  const [listOfUsers, setListOfUsers] = useState([]);


  const loginHandler = (data) => {
  
    setManage((prev) => (
      {
        ...prev,
        isLoggedIn: data.isLoggedIn,
        authToken: data.token,
        usertype: data.type,
        userdetails: data.userDetails
      }
    ))
    // setIsLoggedIn(data.isLoggedIn);

    // setAuthToken(data.token);
    // setUsertype(data.type)
  };

  useEffect(() => {
    localStorage.setItem('manage', JSON.stringify(manage));
  }, [manage]);
  return (
    <DataContext.Provider value={{
      loginHandler, manage, setManage,listOfUsers,setListOfUsers
    }}>
      {children}
    </DataContext.Provider>
  )
}
