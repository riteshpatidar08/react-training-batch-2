import { createContext, useState } from "react";

export const DataContext = createContext ;

export const DataProvider = ({children}) => {
    const [data , setData] = useState('hello this is the data from the context api')
return (

    <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
)
}