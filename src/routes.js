import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Users from './components/Users'
import Signup from './components/Signup'
import Signin from './components/Signin'
import UserDetails from './components/UserDetails'
import Payments from './components/Payments'
import NewChitty from './components/NewChitty'

import AddUser from './components/addUser'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/home' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signin' component={Signin} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/add-user' component={AddUser} />

        <Route exact path='/user-details' component={UserDetails} />
        <Route exact path='/payments' component={Payments} />
        <Route exact path='/new-chitty' component={NewChitty} />

          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )