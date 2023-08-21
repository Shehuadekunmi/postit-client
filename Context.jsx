import { useContext, createContext } from "react";
const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);
const baseURL = "https://kunmi-api.onrender.com";

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value={{baseURL}}>{children}</AppContext.Provider>
    );
};

export default AppProvider;