import { createContext } from "react";

let ThemeContext = createContext();

// theme context provider

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={{theme: "dark"}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}