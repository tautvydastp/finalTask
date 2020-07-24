import React, { useState } from 'react';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu'
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './components/Footer/Footer'

const UserContext = React.createContext(null);

function App() {

  const [user, setUser] = useState(null);

  const userContextState = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user
  }


  return (
    <UserContext.Provider value={userContextState}>
    <Router>
        <Menu />
        <Content/>
        <Footer />
    </Router>
    </UserContext.Provider>
  )
}

export default App
export {UserContext}
