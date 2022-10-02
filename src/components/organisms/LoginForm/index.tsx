import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInputs } from "components";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "store/slices/authSlice";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, user } = useSelector((state: State) => state.auth);
    const [data, setData] = useState({ user: "", password: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleLogin(data));
    };

    useEffect(() => {
        if (user.authenticated) {
            navigate("/admin");
        }
    }, [user]);

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <LoginInputs data={data} setData={setData} />
            {error && <p className="mt-4 text-red-500 tet-md text-center">{error}</p>}
        </form>
    );
};
