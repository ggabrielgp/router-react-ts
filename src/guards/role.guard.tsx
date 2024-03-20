import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Roles } from "../models";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../routes";

interface Props {
  rol: Roles
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((state: AppStore) => state.user);


  return userState.rol === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}

export default RoleGuard;