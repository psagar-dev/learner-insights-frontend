// import { createContext } from "react";

// const DataContext = createContext();

// export default DataContext;

import { createContext, useState, useMemo } from "react";

// Create the context
const DataContext = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  const [listOfUsers, setListOfUsers] = useState([]);

  // Memoize context value to prevent infinite loops in consumers
  const value = useMemo(
    () => ({
      listOfUsers,
      setListOfUsers,
    }),
    [listOfUsers]
  );

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
