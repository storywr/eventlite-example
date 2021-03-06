import React, { useEffect, useState } from 'react'
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from './pages/Home'
import { AuthContext } from './context'
import ls from './util/localstore'
import Authentication from './pages/Authentication'
import Signup from './pages/Signup'

const queryClient = new QueryClient()

const App = () => {
  const [user, setUser] = useState<any>(null)

  const login = (currentUser: string) => {
    setUser(JSON.parse(currentUser))
  }

  const logout = () => {
    setUser(null)
    ls.remove('user')
  }

  useEffect(() => {
    const user = ls.get('user')
    setUser(JSON.parse(user))
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AuthContext.Provider value={{ user, login, logout }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen />
          <Router>
            <Switch>
              <Route exact path='/signup'>
                <Signup />
              </Route>
              <Route exact path='/login'>
                <Authentication />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </QueryClientProvider>
      </AuthContext.Provider>
    </ChakraProvider>
  )
}

export default hot(App)
