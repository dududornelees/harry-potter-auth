import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const CheckAuth = ({}) => {
    const { user } = useSelector((state: State) => state.auth);

    if (Object.keys(user).length > 0) {
        return <Outlet />;
    } else {
        return <Navigate to="auth" replace />;
    }
};
