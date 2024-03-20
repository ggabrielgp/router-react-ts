import { createUser } from "../../redux/states/user";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";

const Login = () => {
	const dispatch = useDispatch();

	const login = async () => {
		try {
			const result = await getMorty();
			dispatch(createUser(result));

		} catch (error) {
			console.log("error", error);
		}
	}

	return (
		<div>
			<h2>Este es el Login</h2>
			<button onClick={login}>Login</button>
		</div>
	);
};

export default Login;
