import { createContext, useContext } from "react";


// contex created
export const themeContext = createContext({
    theme: "light",
    lightTheme: () => { },
    darkTheme: () => { }
})


// provider

export const ThemeProvider = themeContext.Provider


// making custom hook for accessing values from the context

export default function useTheme() {
    return useContext(themeContext);
}




