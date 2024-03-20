import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../routes";

interface Props {
  privateRoute: boolean; // si es true, se protege la ruta, si es false, no se protege la ruta.
}

const PrivateValidation = <Outlet />
const PublicValidation = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ privateRoute }: Props) => {
  /* se obtiene el state del usuario desde el store
  y se comprueba si tiene un id,
  si no, se redirige a la página de login. */
  // outlet es el child de route
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ?
    privateRoute ? (
      PrivateValidation
    ) : (
      PublicValidation
    ) : (
      <Navigate replace to={PublicRoutes.LOGIN} />
    );
}

export default AuthGuard;