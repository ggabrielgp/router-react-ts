import { useNavigate } from "react-router-dom";
import { createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { PrivateRoutes, PublicRoutes } from "../../routes";
import { ChangeEvent, useEffect, useState } from "react";
import { Roles } from "../../models";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selectedRole, setSelectedRole] = useState<Roles>(Roles.USER)

	const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedRole(e.target.value as Roles);
	}

	const login = async () => {
		try {
			const result = await getMorty();
			dispatch(createUser({ ...result, rol: selectedRole })); // cuando rol es 'admin', puede acceder a /dashboard, si es 'user' no dejará ingresar
			navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
		} catch (error) {
			console.log("error", error);
		}
	}

	useEffect(() => {
		dispatch(resetUser());
		navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
	}, [])

	return (
		<div>
			<h1>Este es el Login</h1>

			<label>
				Elige tu rol para ver que permisos tienes: &nbsp;
				<select name="selectedRole" defaultValue={Roles.USER} onChange={handleChangeSelect}>
					<option value={Roles.USER}>USER</option>
					<option value={Roles.ADMIN}>ADMIN</option>
				</select>
			</label>
			<div>
				<button onClick={login}>Login</button>
			</div>
		</div>
	);
};

export default Login;
