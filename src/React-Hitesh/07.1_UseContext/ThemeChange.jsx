import React from 'react'
import useTheme from './contexts/theme'

const ThemeChange = () => {

    const {theme,lightTheme,darkTheme} = useTheme()
  return (
      <div>
          <button onClick={lightTheme}>Light Mode</button>
          <br />
          {theme}
          <br />
          <button onClick={darkTheme}>Dark Mode</button>
    </div>
  )
}

export default ThemeChange