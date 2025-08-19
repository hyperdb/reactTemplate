import { Route, Switch } from "wouter";
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'

function App() {

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default App
