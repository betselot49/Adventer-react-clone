import React, { useContext, createContext, useReducer } from "react";

const GlobalContext = createContext();
const GlobalContextProvider = ({ reducer, initialState, children }) => {
    return (
        <GlobalContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalContext);
export default GlobalContextProvider;