import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeChange from './ThemeChange'




// this app is basically a theme switcher
const DummyApp = () => {

    const [theme, setTheme] = useState('light');

    const lightTheme = () => {
        setTheme("light")
    }
    const darkTheme = () => {
        setTheme("dark")
    }

    useEffect(() => {
        console.log("useeffect ");
        if (theme === "dark") document.body.style.background = "black"
        if(theme === "light") document.body.style.background = "white"
    } ,[theme])
    return (
        <ThemeProvider value={{theme,lightTheme,darkTheme}}>
            <div>
                <ThemeChange />
            </div>
      </ThemeProvider>
  )
}

export default DummyApp