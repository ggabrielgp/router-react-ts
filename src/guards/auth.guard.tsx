import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes";

export const AuthGuard = () => {
  /* se obtiene el state del usuario desde el store
  y se comprueba si tiene un id,
  si no, se redirige a la página de login. */
  // outlet es el child de route
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard;