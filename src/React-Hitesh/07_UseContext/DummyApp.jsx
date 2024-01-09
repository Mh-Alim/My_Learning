import React from 'react'

// my app component will look like this
const DummyApp = () => {
  return (
    <ContextProvider>
    <div className="App">
        <Login />
        <Profile />
      </div>
      </ContextProvider>
  )
}

export default DummyApp