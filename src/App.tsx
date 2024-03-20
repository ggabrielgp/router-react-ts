import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { AuthGuard } from './guards'
import { PrivateRoutes, PublicRoutes, RoutesWithNotFound } from './routes'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {

  return (
    <div className='App'>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />} >
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
