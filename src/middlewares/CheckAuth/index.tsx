import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const CheckAuth = ({}) => {
    const { user } = useSelector((state: State) => state.auth);

    if (user.authenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="auth" replace />;
    }
};
