import { createContext, useState } from 'react';

const DataContext = createContext();
console.log(DataContext)


const DataProvider = ({ children }) => {
  const [data, setData] = useState('this is the data from context');

  return (
    <DataContext.Provider value={{ data, setData }}>
     {children} 
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
