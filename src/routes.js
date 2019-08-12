import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/main'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  )
}
