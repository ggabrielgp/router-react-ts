import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../../redux/states/user";
import { PublicRoutes } from "../../routes";
import { AppStore } from "../../redux/store";

const LogOut = () => {
	const userState = useSelector((state: AppStore) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logOut = () => {
		//clearLocalStorage(UserKey)
		dispatch(resetUser());
		navigate(PublicRoutes.LOGIN, { replace: true });
	}
	return (
		<>
			{
				userState.name
					?
					<>
						<p>Hola <span style={{ color: "cyan" }}>{userState.name}</span> ingresaste con el rol de: <span style={{ color: "tomato" }}>{userState.rol}</span></p>
						<button onClick={logOut}>
							Log Out
						</button>
					</>
					:
					null
			}
		</>

	);
};

export default LogOut;
